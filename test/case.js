import { expect } from 'chai'
import {
  snakeCase
, camelCase
, headerCase
}  from '../src/helpers/case'


const samples = {
  allow: 'allow'
, cacheControl: 'cache-control'
, lastModified: 'last-modified'
, maxAge: 'max-age'
, sMaxage: 's-maxage'
, xFooBar: 'x-foo-bar'
, contentMD5: 'content-MD5'
}

const headers = {
  allow: 'Allow'
, cacheControl: 'Cache-Control'
, lastModified: 'Last-Modified'
, contentMD5: 'Content-MD5'
}


describe('case', () => {

  it('should convert to snake-case', () => {
    Object.keys(samples).forEach(key => {
      const snake = samples[key]
      const camel = key
      expect(snakeCase(camel)).to.equal(snake)
    })
  })

  it('should convert from snake-case', () => {
    Object.keys(samples).forEach(key => {
      const snake = samples[key]
      const camel = key
      expect(camelCase(snake)).to.equal(camel)
    })
  })

  it('should convert to header case', () => {
    Object.keys(headers).forEach(key => {
      const camel  = key
      const header = headers[key]
      expect(headerCase(camel)).to.equal(header)
    })
  })

  it('fromSnake is idempotent', () => {
    Object.keys(samples).forEach(key => {
      const camel = key
      expect(camelCase(camel)).to.equal(camel)
    })
  })
})
