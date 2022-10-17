export type EventsItemModel = {
  allDay: boolean
  color: string
  description: string
  end: Date
  id: number
  start: Date
  title: string
}

export type EventsModel = EventsItemModel[]
