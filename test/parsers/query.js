import { expect } from 'chai'
import verify     from 'jsverify'
import query      from '../../src/parsers/query'

describe('query', () => {
  it('parses single words to true', () => {
    const i = 'public'
    const o = { 'public': true }

    expect(query(i)).to.deep.equal(o)
  })

  it('parses = to object vals', () => {
    const i = 'foo=dope'
    const o = { foo: 'dope' }

    expect(query(i)).to.deep.equal(o)
  })

  it('treats ; and , the same', () => {
    const i = 'a;b,c'
    const o = { a: true, b: true, c: true }

    expect(query(i)).to.deep.equal(o)
  })

  it('doesn\'t care about spaces', () => {
    const i = 'a ; b , c'
    const o = { a: true, b: true, c: true }

    expect(query(i)).to.deep.equal(o)
  })

  it('parses arrays as query', () => {
    const i = [ 'public', 'foo=bar' ]
    const o = { 'public': true, 'foo': 'bar' }

    expect(query(i)).to.deep.equal(o)
  })

  it('parses objects as query', () => {
    const i = { 'public': true, 'foo': 'bar' }
    const o = { 'public': true, 'foo': 'bar' }

    expect(query(i)).to.deep.equal(o)
  })

})
