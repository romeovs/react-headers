import { expect } from 'chai'
import age        from '../src/parsers/age'
import verify     from 'jsverify'

describe('age', () => {

  verify.property('passes trough numbers', 'nat(1000)', function (val) {
    return age(val) === val
  })

  it('parses expiry format', () => {
    expect(age('1Y')).to.equal(31536000)
    expect(age('1y')).to.equal(31536000)

    expect(age('1M')).to.equal(2674800)

    expect(age('1W')).to.equal(601200)
    expect(age('1w')).to.equal(601200)

    expect(age('1d')).to.equal(86400)
    expect(age('1D')).to.equal(86400)

    expect(age('1m')).to.equal(60)
    expect(age('1s')).to.equal(1)
  })

  it('throws on invalid strings', () => {
    expect(() => age('foo')).to.throw()
  })
})
