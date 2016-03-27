import type from '../helpers/type'

export default function (val) {
  return Object.keys(val).reduce(function (acc, key) {
    const value = val[key]
    const part  = value === true ? key : `${key}=${value.toString()}`
    return acc.concat(part)
  }, []).join(';')
}
