import type  from '../../helpers/type'
import age   from '../../parsers/age'
import query from '../../parsers/query'

const parse = function (val) {
  switch ( type(val) ) {

    case 'object':
      // query is parsed, so parse specific subparts

      return [
        'maxAge'
      , 'sMaxage'
      , 'minFresh'
      , 'maxStale'
      , 'staleWhileRevalidate'
      , 'staleIfError'
      ].reduce(function (acc, key) {
        if ( acc[key] !== undefined ) {
          try {
            return {
              ...acc
            , [key]: age(acc[key])
            }
          } catch (err) {
            err.message = `${err.message} in ${key}`
            throw err
          }
        } else {
          return acc
        }
      }, val)

    default:
      return parse(query(val))

  }
}

export default parse
