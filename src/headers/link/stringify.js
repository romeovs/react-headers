import unquery from '../../stringifiers/query'

export default function (val) {

  return val.map(function (el) {
    const {
      href
    , ...rest
    } = el

    return `<${href}>;${unquery(rest)}`.replace(/ *; *$/, '')
  })
}
