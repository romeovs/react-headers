import query    from '../../parsers/query'
import parse    from './parse'
import validate from './validate'

export default {
  parse
, merge (a, b) {
    // dedupe the elements
    return [...new Set((a || []).concat(b || []))]
  }

, validate
}
