
const known = [
  'public'
, 'private'
, 'noStore'
, 'noCache'
, 'noTransform'
, 'mustRevalidate'
, 'proxyRevalidate'
, 'maxAge'
, 'sMaxage'
, 'minFresh'
, 'maxStale'
, 'staleWhileRevalidate'
, 'staleIfError'
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
