
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

  console.log('val', val)
  val.forEach(function (el) {
    console.log(el)
    if ( known.indexOf(el) < 0 ) {
      warnings.push(`unknown request method: \`${el}\``)
    }
  })

  console.log(warnings)
  return warnings
}
