import { expect } from 'chai'
import unquery    from '../../src/stringifiers/query'


describe('unquery', () => {

  it('works with single words', () => {
    return expect(unquery({ foo: true })).to.equal('foo')
  })

  it('works with key-value queries', () => {
    return expect(unquery({ foo: 'bar' })).to.equal('foo=bar')
  })

  it('work with multiple parts', () => {
    return expect(unquery({
      foo: 'bar'
    , baz: 10
    })).to.equal('foo=bar;baz=10')
  })
})
