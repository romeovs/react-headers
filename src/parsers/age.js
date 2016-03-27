import exp   from 'expiry-js'
import type  from '../helpers/type'
import isInt from '../helpers/is-int'

const isExp = val => /^([0-9]+[YyWwMDdhms])+$/.test(val)

export default function (val) {
  switch (type(val)) {

    case 'number':
      return val

    case 'string':
      if ( isExp(val) ) {
        return exp(val.replace(/[dyw]/, c => c.toUpperCase())).asSeconds()
      } else if ( isInt(val) ) {
        return Number.parseInt(val)
      }
  }
  throw new Error(`cannot parse \`${val}\` as age`)
}

