// parse a set of props to a set of parsed headers
import headers   from './headers'
import {
  fromSnake
} from './helpers/case'

const def = val => val
export default function (props) {
  return Object.keys(props).reduce((acc, key) => {

    const k = fromSnake(key)

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

