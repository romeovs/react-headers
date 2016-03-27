

const known = [
  'public'
, 'private'
, 'no-store'
, 'no-cache'
, 'no-transform'
, 'must-revalidate'
, 'proxy-revalidate'
, 'max-age'
, 's-maxage'
, 'min-fresh'
, 'max-stale'
]


export default function (val) {
  const warnings = []

  Object.keys(val).forEach(function (key) {
    if ( known.indexOf(key) < 0 ) {
      warnings.push(`unknown key ${key}`)
    }
  })

  if ( val['public'] && val['private'] ) {
    warnings.push('setting public and private together, this is strange')
  }

  return warnings
}
