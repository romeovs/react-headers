import type  from '../../helpers/type'
import age   from '../../parsers/age'
import query from '../../parsers/query'

const parse = function (val) {
  switch ( type(val) ) {

    case 'object':
      // query is parsed, so parse specific subparts

      return [
        'max-age'
      , 's-maxage'
      , 'min-fresh'
      , 'max-stale'
      ].reduce(function (acc, key) {
        if ( acc[key] !== undefined ) {
          try {
            return {
              ...acc
            , [key]: age(acc[key])
            }
          } catch (err) {
            throw new Error(`${err.message} in ${key}`)
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
