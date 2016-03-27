import headers from './headers'

const def = val => []

const validate =
  process.env.NODE_ENV === 'production'
  ? val => val
  : function (props) {
      Object.keys(props).forEach(function (k) {
        const header = headers[k]
        if ( !header ) {
          console.warn(`Warning: header \`${k}\` is not known by react-headers`)
        } else {
          const validate = header.validate || def
          validate(props[k]).forEach(function (warning) {
            console.warn(`Warning in header \`${k}\`: ${warning}`)
          })
        }
      })

      return props
    }

export default validate
