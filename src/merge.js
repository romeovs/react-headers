import headers from './headers'

// merge all the fields from b into a
export default function (a, b) {
  const res = Object.keys(a).reduce(function (acc, k) {
    const header = headers[k]
    if ( !header ) {
      // we already warned in parse phase
      return acc
    } else {
      // merge headerss
      return {
        ...acc
      , [k]: header.merge(a[k], b[k])
      }
    }
  }, {})

  // fill in all keys we missed in b
  return {
    ...b
  , ...res
  }
}
