
// delete all undefined keys from object
export default function (obj) {
  const res = { ...obj }
  Object.keys(res).forEach((key) => {
    if ( res[key] === undefined || res[key] === false ) {
      delete res[key]
    }
  })

  return res
}
