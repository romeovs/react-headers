// parse a set of props to a set of parsed headers
import headers from './headers'

const def = val => val
export default function (props) {
  return Object.keys(props).reduce((acc, k) => {
    const header = headers[k]   || {}
    const parse  = header.parse || def
    // extend the result with the parsed field
    try {
      return {
        ...acc
      , [k]: parse(props[k])
      }
    } catch (err) {
      err.message = `${err.message} in the \`${k}\` header`
      throw err
    }
  }, {})
}

