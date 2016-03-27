// parse a set of props to a set of parsed headers
import headers from './headers'

export default function (props) {
  return Object.keys(props).reduce((acc, k) => {
    const header = headers[k]
    if ( !header ) {
      console.warn(`Warning: header \`${k}\` is not known by react-headers`)
      return {
        ...acc
      , [k]: props[k]
      }
    } else {
      // extend the result with the parsed field
      try {
        return {
          ...acc
        , [k]: header.parse(props[k])
        }
      } catch (err) {
        err.message = `${err.message} in the \`${k}\` header`
        throw err
      }
    }
  }, {})
}

