import { expect } from 'chai'
import verify     from 'jsverify'
import age        from '../../src/parsers/age'

describe('age', () => {

  verify.property('passes trough numbers', 'nat(1000)', function (val) {
    return age(val) === val
  })

  it('parses expiry format', () => {
    expect(age('1Y')).to.equal(60 * 60 * 24 * 365)
    expect(age('1y')).to.equal(60 * 60 * 24 * 365)

    expect(age('1M')).to.equal(60 * 60 * 24 * 31)

    expect(age('1W')).to.equal(60 * 60 * 24 * 7)
    expect(age('1w')).to.equal(60 * 60 * 24 * 7)

    expect(age('1d')).to.equal(60 * 60 * 24)
    expect(age('1D')).to.equal(60 * 60 * 24)

    expect(age('1m')).to.equal(60)
    expect(age('1s')).to.equal(1)
  })

  it('throws on invalid strings', () => {
    expect(() => age('foo')).to.throw()
  })
})
