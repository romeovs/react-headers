import { expect } from 'chai'
import verify     from 'jsverify'
import timekeeper from 'timekeeper'

import { dateEq } from '../helpers'
import expires    from '../../src/headers/expires'

const {
  parse
, merge
, stringify
} = expires

describe('Expires', () => {
  describe('parse', () => {
    verify.property('passes trough dates', 'datetime', function (date) {
      return dateEq(date, parse(date))
    })

    verify.property('parses date strings', 'datetime', function (date) {
      return dateEq(date, parse(date.toString()))
    })

    verify.property('parses numbers as seconds in the future', 'nat', function (age) {
      const time = new Date()
      timekeeper.freeze(time)
      const fut = new Date(time.getTime() + 1000 * age)
      const res = dateEq(fut, parse(age))
      timekeeper.reset()
      return res
    })
  })

  describe('merge', () => {
    it('picks the date that is to expire the soonest', () => {
      const then  = parse('1m')
      const later = parse('2m')
      expect(merge(then,  later)).to.equal(then)
      expect(merge(later, then)).to.equal(then)
    })

    it('picks the defined date', () => {
      const then = parse('1m')
      expect(merge(then, undefined)).to.equal(then)
      expect(merge(undefined, then)).to.equal(then)
    })

  })
})
