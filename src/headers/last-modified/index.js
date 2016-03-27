import date from '../../parsers/date'
import {
  max
} from '../../helpers/math'

export default {
  parse: date
, merge (a, b) {
    return max(a, b) // return newest date
  }
}
