import headers from './headers'

const def = (a, b) => a

// merge all the fields from b into a
export default function (a, b) {
  const res = Object.keys(a).reduce(function (acc, k) {
    const header = headers[k]   || {}
    const merge  = header.merge || def
    // merge headers
    return {
      ...acc
    , [k]: b[k] === undefined ? a[k] : merge(a[k], b[k])
    }
  }, {})

  // fill in all keys we missed in b
  return {
    ...b
  , ...res
  }
}
