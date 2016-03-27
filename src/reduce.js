import merge     from './merge'
import parse     from './parse'
import stringify from './stringify'

export default function (propsList) {
  return propsList.reduce(function (acc, props) {
    return stringify(merge(acc, parse(props)))
  }, {})
}
