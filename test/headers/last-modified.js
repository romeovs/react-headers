import { expect } from 'chai'
import verify     from 'jsverify'

import LastModified from '../../src/headers/last-modified'

const {
  parse
, merge
} = LastModified

describe('Last-Modified', () => {

  describe('parse', () => {
    // all tested in date
  })

  verify.property('picks the largest date', 'datetime', 'datetime', function (a, b) {
    return merge(a, b).getTime() === Math.max(a, b)
  })
})
