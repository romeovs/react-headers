import {
  min
, max
} from '../../helpers/math'
import clean from '../../helpers/clean'


const merge = function (a, b) {

  const priv = a['private'] || b['private']

  return clean({
    'max-age':   min(a['max-age'],   b['max-age'])
  , 's-maxage':  min(a['s-maxage'],  b['s-maxage'])
  , 'min-fresh': max(a['min-fresh'], b['min-fresh'])
  , 'max-stale': min(a['max-stale'], b['max-stale'])
  , 'no-transform': a['no-transform'] || b['no-transform']
  , 'public':  (a['public'] && b['public']) && !priv
  , 'private': priv
  , 'no-store': a['no-store'] || b['no-store']
  , 'no-cache': a['no-cache'] || b['no-cache']
  , 'proxy-revalidate': a['proxy-revalidate'] || b['proxy-revalidate']
  , 'must-revalidate': a['must-revalidate'] || b['must-revalidate']
  })
}

export default merge
