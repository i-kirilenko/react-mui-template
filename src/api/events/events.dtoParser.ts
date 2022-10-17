import parser, { parseRequiredField, ParserRule } from 'api/api.parsers'
import { parseUtcDateToDate } from 'api/api.parsers/date'
import { EventsDto, EventsItemDto } from './events.dto'
import { EventsItemModel, EventsModel } from './events.model'

const eventsItemDtoParserRules = [
  {
    from: 'allDay',
    parser: (p = false) => p,
    to: 'allDay',
  },
  {
    from: 'color',
    parser: parseRequiredField,
    to: 'color',
  },
  {
    from: 'description',
    parser: (dto: string = '') => dto,
    to: 'description',
  },
  {
    from: 'end',
    parser: (dto: string) => parseUtcDateToDate(dto),
    to: 'end',
  },
  {
    from: 'id',
    parser: parseRequiredField,
    to: 'id',
  },
  {
    from: 'start',
    parser: (dto: string) => parseUtcDateToDate(dto),
    to: 'start',
  },
  {
    from: 'title',
    parser: parseRequiredField,
    to: 'title',
  },
]

const eventsItemDtoParser = (dtos: unknown): EventsItemModel[] => {
  if (!dtos || !Array.isArray(dtos)) {
    throw Error()
  }

  return dtos.map((dto: EventsItemDto) =>
    parser<EventsItemDto, EventsItemModel>(
      dto,
      eventsItemDtoParserRules as ParserRule[],
    ),
  ) as EventsItemModel[]
}

const eventsDtoParserRules = [
  {
    from: 'events',
    parser: eventsItemDtoParser,
    to: 'events',
  },
]

export const eventsDtoParser = (dto: unknown): EventsModel =>
  parser<EventsDto, { events: EventsModel }>(
    dto as EventsDto,
    eventsDtoParserRules,
  ).events
