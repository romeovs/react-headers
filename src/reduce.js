import merge     from './merge'
import parse     from './parse'
import stringify from './stringify'
import validate  from './validate'

export default function (propsList) {
  return propsList.reduce(function (acc, props) {
    return stringify(merge(acc, validate(parse(props))))
  }, {})
}
