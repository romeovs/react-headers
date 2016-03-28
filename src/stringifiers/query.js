import type from '../helpers/type'
import {
  snakeCase
} from '../helpers/case'

export default function (val) {
  return Object.keys(val).reduce(function (acc, key) {
    const value = val[key]
    const k = snakeCase(key)
    const part  = value === true ? k : `${k}=${value.toString()}`
    return acc.concat(part)
  }, []).join(';')
}
