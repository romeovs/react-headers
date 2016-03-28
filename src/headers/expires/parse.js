import type from '../../helpers/type'
import age  from '../../parsers/age'

const parse = function (val) {
  switch (type(val)) {
    case 'string':
      const d = new Date(val)
      if ( isNaN(d.getTime()) ) {
        // parse as age
        return parse(age(val))
      } else {
        return d
      }

    case 'date':
      const secs = val.getTime()
      if ( isNaN(secs) ) {
        throw new Error(`got invalid date`)
      } else {
        return val
      }

    case 'number':
      return new Date(Date.now() + val * 1000)
  }

  throw new Error(`could not parse \`${val}\` as date or age`)
}

export default parse
