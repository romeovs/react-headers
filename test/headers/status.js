import { expect } from 'chai'
import verify     from 'jsverify'

import status from '../../src/headers/status'

const {
  parse
, merge
} = status

describe('Status', () => {

  describe('parse', () => {
    verify.property('parses numbers', 'nat(100)', function (val) {
      return parse(val) === val
    })

    verify.property('parses strings a number', 'nat(100)', function (val) {
      return parse(val.toString()) === val
    })
  })

  describe('merge', () => {
    verify.property('prefers higher status codes', 'nat(100)', 'nat(100)', function (a, b) {
      return merge(a, b) === Math.max(a, b)
    })
  })

})
