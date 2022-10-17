import parser, { parseRequiredField } from 'api/api.parsers'
import { IssuesDto, IssuesItemDto } from './issues.dto'
import { IssuesItemModel, IssuesModel } from './issues.model'

const issuesItemDtoParserRules = [
  {
    from: 'id',
    parser: parseRequiredField,
    to: 'id',
  },
  {
    from: 'data.title',
    parser: parseRequiredField,
    to: 'subject',
  },
  {
    from: 'data.short',
    parser: (p: unknown) => p ?? null,
    to: 'announce',
  },
]

const issuesItemDtoParser = (dtos: unknown): IssuesItemModel[] => {
  if (!dtos || !Array.isArray(dtos)) {
    throw Error()
  }

  return dtos.map((dto: IssuesItemDto) =>
    parser<IssuesItemDto, IssuesItemModel>(dto, issuesItemDtoParserRules),
  ) as IssuesItemModel[]
}

const issuesDtoParserRules = [
  {
    from: 'issues',
    parser: issuesItemDtoParser,
    to: 'issues',
  },
]

export const issuesDtoParser = (dto: unknown): IssuesModel =>
  parser<IssuesDto, { issues: IssuesModel }>(
    dto as IssuesDto,
    issuesDtoParserRules,
  ).issues
