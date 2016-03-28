
export default function (val) {
  const warnings = []

  val.forEach(function (el) {
    if (! el.href ) {
      warnings.push(`Link header without href encountered`)
    }
  })

  return warnings
}
