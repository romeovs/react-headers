import SideEffect from 'react-side-effect'
import Headers    from './components/headers'
import reduce     from './reduce'

// don't do anything!
const handleChange = function () {}

export default SideEffect(
  reduce
, handleChange
)(Headers)
