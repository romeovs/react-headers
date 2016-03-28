import parse     from './parse'
import merge     from './merge'
import stringify from './stringify'
import validate  from './validate'

export default {
  parse
, merge (a = [], b = []) {
    return a.concat(b)
  }
, stringify
, validate
}
