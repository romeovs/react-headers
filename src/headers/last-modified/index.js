import date   from '../../parsers/date'
import undate from '../../stringifiers/date'
import {
  max
} from '../../helpers/math'

export default {
  parse: date
, merge (a, b) {
    return max(a, b) // return newest date
  }
, stringify: undate
, validate (val) {
    const warnings = []

    if ( val > Date.now() ) {
      warnings.push('setting a Last-Modified date that lies in the future')
    }

    return warnings
  }
}
