import { expect } from 'chai'

import CacheControl from '../src/headers/cache-control'

const {
  parse
, merge
} = CacheControl

describe('Cache-Control', () => {
  describe('parse', () => {

    it('number are interpreted to seconds', () => {
      const i = 'max-age=10;s-maxage=20;min-fresh=30;max-stale=40'
      const o = {
        'max-age': 10
      , 's-maxage': 20
      , 'min-fresh': 30
      , 'max-stale': 40
      }

      expect(parse(i)).to.deep.equal(o)
    })

    it('expiries are converted to seconds', () => {
      const i = 'max-age=1m;s-maxage=2m;min-fresh=3m;max-stale=4m'
      const o = {
        'max-age': 60
      , 's-maxage': 120
      , 'min-fresh': 180
      , 'max-stale': 240
      }

      expect(parse(i)).to.deep.equal(o)
    })

    it('bad age throws', () => {
      const i = 'max-age=2-0'

      expect(() => parse(i)).to.throw()
    })
  })

  describe('merge', () => {
    it('prefers smallest max-age', () => {
      const a = parse('max-age=10')
      const b = parse('max-age=20')
      expect(merge(a, b)).to.deep.equal({ 'max-age': 10 })
    })

    it('prefers smallest s-maxage', () => {
      const a = parse('s-maxage=10')
      const b = parse('s-maxage=20')

      expect(merge(a, b)).to.deep.equal({ 's-maxage': 10 })
    })

    it('prefers largest min-fresh', () => {
      const a = parse('min-fresh=10')
      const b = parse('min-fresh=20')

      expect(merge(a, b)).to.deep.equal({ 'min-fresh': 20 })
    })

    it('prefers smallest max-stale', () => {
      const a = parse('max-stale=10')
      const b = parse('max-stale=20')

      expect(merge(a, b)).to.deep.equal({ 'max-stale': 10 })
    })


    it('prefers private over public', () => {
      const a = parse('private')
      const b = parse('public')

      expect(merge(a, b)).to.deep.equal({ 'private': true })
      expect(merge(b, a)).to.deep.equal({ 'private': true })
    })

    it('keeps public', () => {
      const a = parse('')
      const b = parse('public')

      expect(merge(a, b)).to.deep.equal({ 'public': true })
      expect(merge(b, a)).to.deep.equal({ 'public': true })
    })
  })
})
