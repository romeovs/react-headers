import parse     from './parse'
import merge     from './merge'
import validate  from './validate'
import unquery   from '../../stringifiers/query'

export default {
  parse
, merge
, stringify: unquery
, validate
}

// todo
// - warnings for invalid values
// - warnings for unsupported headers
// - disallow Pragma header
