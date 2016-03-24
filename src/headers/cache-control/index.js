import parse    from './parse'
import merge    from './merge'
import validate from './validate'

export default {
  parse (val) {
    try {
      return parse(val)
    } catch (err) {
      throw new Error(`${err.message} in Cache-Control`)
    }
  }
, merge
, validate
}

// todo
// - warnings for invalid values
// - warnings for unsupported headers
// - disallow Pragma header
