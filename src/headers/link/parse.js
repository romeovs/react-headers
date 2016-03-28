import type  from '../../helpers/type'
import query from '../../parsers/query'

const linkRe = /^<(.*)>$/

const parse = function (val) {
  switch (type(val)) {

    case 'string':
      return parse(query(val))

    case 'array':
      return val.reduce((acc, el) => acc.concat(parse(el)), [])

    case 'object':
      const parsed = Object.keys(val).reduce(function (acc, key) {
        const match = key.match(linkRe)
        if ( match ) {
          return {
            ...acc
          , href: match[1]
          }
        } else {
          return {
            ...acc
          , [key]: val[key]
          }
        }
      }, {})

      return [ parsed ]
  }

  throw new Error(`cannot parse ${val} as link`)
}

export default parse
