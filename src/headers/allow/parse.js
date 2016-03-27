import type from '../../helpers/type'

const parse = function (val) {
  switch (type(val)) {
    case 'array':
      return val.map(el => el.trim().toUpperCase())

    case 'string':
      return parse(val.split(/[,;]/g))

    case 'object':
      // return keys with trueish value
      return parse(Object.keys(val).filter(key => val[key]))
  }

  throw new Error(`cannot parse \`${val}\``)
}


export default parse
