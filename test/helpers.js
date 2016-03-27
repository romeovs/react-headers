import { expect } from 'chai'

export const hasWarning = function (warnings, re) {
  const filtered = warnings.filter(el => re.test(el))
  expect(filtered).to.have.length.above(0)
}

// round dates to milli
const round = function (a) {
  if (a.getMonth) {
    return round(a.valueOf())
  } else {
    return Math.floor(a / 1000) * 1000
  }
}

export const dateEq = function (a, b) {
  return round(a) === round(b)
}

