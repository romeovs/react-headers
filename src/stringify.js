import headers from './headers'

const def = val => val.toString()

// stringify each field
export default function (fields) {
  return Object.keys(fields).reduce(function (acc, k) {
    const header = headers[k]
    if ( !header ) {
      // we already warned in parse phase
      return {
        ...acc
      , [k]: fields[k]
      }
    } else {
      const stringify = header.stringify || def
      // merge headerss
      return {
        ...acc
      , [k]: stringify(fields[k])
      }
    }
  }, {})
}
