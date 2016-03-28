

const specialTo = {
  contentmd5: 'content-MD5'
, smaxage:    's-maxage'
}

const specialFrom = {
  'content-md5': 'contentMD5'
}


// fooBar -> foo-bar
const toRe = /([a-z])([A-Z])/g
export const toSnake = function (str) {
  const s = specialTo[str.toLowerCase()]
  return s ? s : str.replace(toRe, $ => `${$[0]}-${$[1].toLowerCase()}`)
}

// foo-bar  -> fooBar
const fromRe = /-([a-zA-Z])/g
export const fromSnake = function (str) {
  const s = specialFrom[str.toLowerCase()]
  return s ? s : str.replace(fromRe, $ => $[1].toUpperCase())
}

const hdrRe = /(^[a-z]|-[a-z])/g
export const toHeader = function (str) {
  const snake = toSnake(str)
  return snake.replace(hdrRe, $ => $.toUpperCase())
}
