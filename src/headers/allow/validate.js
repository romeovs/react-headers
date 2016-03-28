
const known = [
  'GET'
, 'PUT'
, 'POST'
, 'DELETE'
, 'HEAD'
, 'OPTIONS'
, 'PATCH'
, 'CONNECT'
]

export default function (val) {
  const warnings = []

  val.forEach(function (el) {
    if ( known.indexOf(el) < 0 ) {
      warnings.push(`unknown request method: \`${el}\``)
    }
  })

  return warnings
}
