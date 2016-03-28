import parse   from './parse'
import undate  from '../../stringifiers/date'
import {
  min
} from '../../helpers/math'

export default {
  parse
, merge: min
, stringify: undate
}
