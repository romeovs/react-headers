import type from '../helpers/type'

const date = function (val) {
  switch (type(val)) {
    case 'date':
      if ( isNaN(val.getTime()) ) {
        throw new Error('invalid date')
      } else {
        return val
      }

    case 'string':
      return date(new Date(val))
  }

  throw new Error(`cannot parse \`${val}\` as date`)
}

export default date
