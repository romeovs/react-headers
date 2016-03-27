import { expect } from 'chai'
import verify     from 'jsverify'
import date       from '../../src/parsers/date'
import { dateEq } from '../helpers'

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
