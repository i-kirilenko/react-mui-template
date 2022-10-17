export type IssuesItemDto = {
  id: number
  data: {
    title: string
    short?: string
  }
}

export type IssuesDto = {
  issues: IssuesItemDto[]
}
