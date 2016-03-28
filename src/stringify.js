import headers from './headers'
import {
  headerCase
} from './helpers/case'

const def = val => val.toString()

// stringify each field
export default function (fields) {
  return Object.keys(fields).reduce(function (acc, key) {
    const header = headers[key] || {}
    const stringify = header.stringify || def

    const k = headerCase(key)

    // merge headerss
    return {
      ...acc
    , [k]: stringify(fields[key])
    }
  }, {})
}
