export type EventsItemDto = {
  allDay: boolean
  color: string
  description: string
  end: string
  id: number
  start: string
  title: string
}

export type EventsDto = {
  events: EventsItemDto[]
}
