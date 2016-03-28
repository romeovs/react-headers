import { expect } from 'chai'
import undate     from '../../src/stringifiers/date'

describe('date stringification', () => {
  it('should return the date is specified in RFC-1123', () => {
    expect(undate(new Date(0))).to.equal('Thu, 01 Jan 1970 00:00:00 GMT')
  })
})
