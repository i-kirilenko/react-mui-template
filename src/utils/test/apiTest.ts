import { UseQueryResult } from 'react-query'

export async function updateView<Model>(result: {
  current: UseQueryResult<Model, Error>
}): Promise<void> {
  if (
    !result.current ||
    (!result.current.isError && !result.current.isSuccess)
  ) {
    await new Promise((p) => setTimeout(p)) // eslint-disable-line no-promise-executor-return
    await updateView(result)
  }
}
