import type  from '../helpers/type'
import isInt from '../helpers/is-int'

export default function (val) {
  switch (type(val)) {

    case 'number':
      return val

    case 'string':
      if ( isInt(val) ) {
        return Number.parseInt(val)
      }
  }

  throw new Error(`cannot parse ${val} as number`)
}

