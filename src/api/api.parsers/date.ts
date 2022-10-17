import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'

export const parseUtcDateToDayjs = (dto: string): Dayjs => {
  if (dto === undefined) {
    throw Error()
  }

  dayjs.extend(utc)
  const model = dayjs.utc(dto)
  if (!model.isValid()) {
    throw Error()
  }

  return model
}

export const parseUtcDateToDate = (dto: string): Date =>
  parseUtcDateToDayjs(dto).toDate()
