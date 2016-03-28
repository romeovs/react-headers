
// fooBar -> foo-bar
const specialSnake = {
  contentmd5: 'content-MD5'
, smaxage:    's-maxage'
}

const snakeRe = /([a-z])([A-Z])/g
export const snakeCase = function (str) {
  const s = specialSnake[str.toLowerCase()]
  return s ? s : str.replace(snakeRe, $ => `${$[0]}-${$[1].toLowerCase()}`)
}

// foo-bar  -> fooBar
const specialCamel = {
  'content-md5': 'contentMD5'
}

const camelRe = /-([a-zA-Z])/g
export const camelCase = function (str) {
  const s = specialCamel[str.toLowerCase()]
  return s ? s : str.replace(camelRe, $ => $[1].toUpperCase())
}

// foo-bar -> Foo-Bar
const headerRe = /(^[a-z]|-[a-z])/g
export const headerCase = function (str) {
  const snake = snakeCase(str)
  return snake.replace(headerRe, $ => $.toUpperCase())
}
