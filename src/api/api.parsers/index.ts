import get from 'lodash/get'
import set from 'lodash/set'

export type Parser = (p: unknown) => unknown

export type ParserRule = {
  from: string | string[]
  parser?: Parser
  to: string
}

const parser = <
  Source extends Record<string, unknown>,
  Destination extends Record<string, unknown>,
>(
  source: Source,
  rules: ParserRule[],
): Destination =>
  rules.reduce((acc, cur: ParserRule) => {
    if (Array.isArray(cur.from)) {
      if (!cur.parser) {
        throw Error()
      }

      const sourceValues = cur.from.map((p) => get(source, p))
      const destinationValue = cur.parser(sourceValues)
      return set(acc, cur.to, destinationValue)
    }

    const sourceValue = get(source, cur.from)
    const destinationValue = cur.parser ? cur.parser(sourceValue) : sourceValue
    return set(acc, cur.to, destinationValue)
  }, {}) as Destination

export const parseRequiredField = (source: unknown): unknown => {
  if (source === undefined) {
    throw Error()
  }

  return source
}

export default parser
