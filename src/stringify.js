import headers from './headers'

const def = val => val.toString()

// stringify each field
export default function (fields) {
  return Object.keys(fields).reduce(function (acc, k) {
    const header = headers[k] || {}
    const stringify = header.stringify || def
    // merge headerss
    return {
      ...acc
    , [k]: stringify(fields[k])
    }
  }, {})
}
