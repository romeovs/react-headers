import { expect } from 'chai'

export const hasWarning = function (warnings, re) {
  const filtered = warnings.filter(el => re.test(el))
  expect(filtered).to.have.length.above(0)
}
