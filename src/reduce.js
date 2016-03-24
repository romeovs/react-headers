import merge from './merge'
import parse from './parse'

export default function (propsList) {
  return propsList.reduce((acc, props) => merge(acc, parse(props)), {})
}
