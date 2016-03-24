import type from 'type-name'

export default function (val) {
  return type(val).toLowerCase()
}
