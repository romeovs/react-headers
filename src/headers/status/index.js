import number  from '../../parsers/number'
import { max } from '../../helpers/math'

export default {
  parse: number
, merge (a, b) {
    // use the highest error code
    return max(a, b)
  }
}
