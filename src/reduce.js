import merge     from './merge'
import parse     from './parse'
import stringify from './stringify'
import validate  from './validate'

export default function (propsList) {
  return stringify(propsList.reduce(function (acc, props) {
    return merge(acc, validate(parse(props)))
  }, {}))
}
