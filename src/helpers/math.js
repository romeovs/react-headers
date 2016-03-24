
export const max = function (a, b) {
  if ( a === undefined ) { return b }
  if ( b === undefined ) { return a }
  return a > b ? a : b
}

export const min = function (a, b) {
  if ( a === undefined ) { return b }
  if ( b === undefined ) { return a }
  return a <= b ? a : b
}

