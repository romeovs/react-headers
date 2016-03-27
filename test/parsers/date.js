import { expect } from 'chai'
import verify     from 'jsverify'
import date       from '../../src/parsers/date'

// round dates to milli
const round = function (a) {
  if (a.getMonth) {
    return round(a.valueOf())
  } else {
    return Math.floor(a / 1000) * 1000
  }
}

const dateEq = function (a, b) {
  return round(a) === round(b)
}


describe('age', () => {

  verify.property('passes trough dates', 'datetime', function (val) {
    return dateEq(date(val), val)
  })

  verify.property('parses date strings', 'datetime', function (val) {
    return dateEq(date(val.toString()), val)
  })

  it('throws on invalid dates', () => {
    expect(() => date('bad')).to.throw()
    expect(() => date(new Date('bad'))).to.throw()
  })
})
