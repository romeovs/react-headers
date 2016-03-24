import { expect } from 'chai'
import {
  toSnake
, fromSnake
}  from '../src/helpers/case'



const samples = {
  'max-age': 'maxAge'
, 's-maxage': 'sMaxage'
, 'x-foo-bar': 'xFooBar'
, 'content-md5': 'contentMd5'
}

describe('case', () => {

  it('should convert to snake-case', () => {
    Object.keys(samples).forEach(key => {
      const snake = key
      const camel = samples[key]
      expect(toSnake(camel)).to.equal(snake)
    })
  })

  it('should convert from snake-case', () => {
    Object.keys(samples).forEach(key => {
      const snake = key
      const camel = samples[key]
      expect(fromSnake(snake)).to.equal(camel)
    })
  })

})
