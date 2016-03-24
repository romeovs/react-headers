


const toRe = /([a-z])([A-Z])/g
export const toSnake = function (str) {
  return str.replace(toRe, $ => `${$[0]}-${$[1].toLowerCase()}`)
}


const fromRe = /-([a-zA-Z])/g
export const fromSnake = function (str) {

  return str.replace(fromRe, $ => $[1].toUpperCase())
}
