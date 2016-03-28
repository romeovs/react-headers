import {
  min
, max
} from '../../helpers/math'
import clean from '../../helpers/clean'


const merge = function (a, b) {

  const priv = a['private'] || b['private']

  return clean({
    maxAge:   min(a.maxAge,   b.maxAge)
  , sMaxage:  min(a.sMaxage,  b.sMaxage)
  , minFresh: max(a.minFresh, b.minFresh)
  , maxStale: min(a.maxStale, b.maxStale)
  , noTransform: a.noTransform || b.noTransform
  , 'public':  (a['public'] && b['public']) && !priv
  , 'private': priv
  , noStore: a.noStore || b.noStore
  , noCache: a.noCache || b.noCache
  , proxyRevalidate: a.proxyRevalidate || b.proxyRevalidate
  , mustRevalidate:  a.mustRevalidate  || b.mustRevalidate
  , staleWhileRevalidate: min(a.staleWhileRevalidate, b.staleWhileRevalidate)
  , staleIfError: min(a.staleIfError, b.staleIfError)
  })
}

export default merge
