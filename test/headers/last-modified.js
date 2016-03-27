import { expect } from 'chai'
import verify     from 'jsverify'
import {
  hasWarning
} from '../helpers'

import LastModified from '../../src/headers/last-modified'

const {
  parse
, merge
, validate
} = LastModified

describe('Last-Modified', () => {

  describe('parse', () => {
    // all tested in date
  })

  describe('merge', () => {
    verify.property('picks the largest date', 'datetime', 'datetime', function (a, b) {
      return merge(a, b).getTime() === Math.max(a, b)
    })
  })

  describe('validate', () => {
    it('warns when date is in the future', () => {
      const d = new Date()
      d.setYear(d.getFullYear() + 1)
      const warnings = validate(d)

      hasWarning(warnings, /future/)
    })
  })
})
