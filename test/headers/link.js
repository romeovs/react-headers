import { expect } from 'chai'
import verify     from 'jsverify'
import {
  hasWarning
} from '../helpers'

import Link from '../../src/headers/link'

const {
  parse
, merge
, stringify
, validate
} = Link

describe('Link', () => {

  describe('parse', () => {
    // all tested in date
    it('parses a string', () => {
      const i = '<foo>; rel=stylesheet'
      const o = [{
        href: 'foo'
      , rel: 'stylesheet'
      }]

      expect(parse(i)).to.deep.equal(o)
    })

    it('accepts an object', () => {
      const i = {
        href: 'foo'
      , rel: 'stylesheet'
      }
      const o = [{
        href: 'foo'
      , rel: 'stylesheet'
      }]

      expect(parse(i)).to.deep.equal(o)
    })

    it('accepts multiple strings', () => {
      const i = [
        '<foo>'
      , '<bar>'
      ]
      const o = [{
        href: 'foo'
      }, {
        href: 'bar'
      }]

      expect(parse(i)).to.deep.equal(o)
    })
  })

  describe('merge', () => {
    it('merges arrays', () => {
      const a = [{
        href: 'foo'
      }]

      const b = [{
        href: 'bar'
      }]

      const o = [{
        href: 'foo'
      }, {
        href: 'bar'
      }]

      expect(merge(a, b)).to.deep.equal(o)
    })
  })

  describe('stringify', () => {
    it('prints href as <href>', () => {
      const i = [{
        href: 'foo'
      }]
      const o = [ '<foo>' ]
      expect(stringify(i)).to.deep.equal(o)
    })

    it('works with multiple values', () => {
      const i = [{
        href: 'foo'
      }, {
        href: 'bar'
      }]
      const o = [ '<foo>', '<bar>' ]
      expect(stringify(i)).to.deep.equal(o)
    })

    it('prints non-href fields as query', () => {
      const i = [{
        href: 'foo'
      , rel: 'preload'
      }]
      const o = [ '<foo>;rel=preload' ]
      expect(stringify(i)).to.deep.equal(o)
    })
  })

  describe('validate', () => {
    it('warns when no href is present', () => {
      const warnings = validate(parse('rel=stylesheet'))
      hasWarning(warnings, /href/)
    })
  })
})
