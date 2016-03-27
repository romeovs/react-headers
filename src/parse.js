// parse a set of props to a set of parsed headers
import headers from './headers'

export default function (props) {
  return Object.keys(props).reduce((acc, k) => {
    const header = headers[k]
    if ( !header ) {
      console.warn(`header ${k} not known by react-headers`)
      return acc
    } else {
      // extend the result with the parsed field
      return {
        ...acc
      , [k]: header.parse(props[k])
      }
    }
  }, {})
}

