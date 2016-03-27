import { expect } from 'chai'
import verify     from 'jsverify'
import {
  hasWarning
} from '../helpers'

import allow from '../../src/headers/allow'

const {
  parse
, merge
, validate
} = allow

describe('Allow', () => {
  describe('parse', () => {
    it('parses to uppercase method names', () => {
      expect(parse('GET')).to.deep.equal(['GET'])
      expect(parse('get')).to.deep.equal(['GET'])
      expect(parse('GET, PUT')).to.deep.equal(['GET', 'PUT'])
      expect(parse({
        GET: true
      })).to.deep.equal(['GET'])
    })
  })

  describe('merge', () => {
    it('merges like a set', () => {
      expect(merge(['GET'], ['GET', 'PUT'])).to.deep.equal(['GET', 'PUT'])
    })
  })

  describe('validate', () => {
    it('warns on unknown request methods', () => {
      hasWarning(validate(parse('FOO')), /unknown request method/)
    })
  })
})
