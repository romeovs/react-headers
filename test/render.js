import React      from 'react'
import DOM        from 'react-dom/server'
import { expect } from 'chai'
import Headers    from '../src'

describe('<Headers/>', () => {

  it('catches all headers present', () => {
    DOM.renderToString(
      <div>
        <Headers
          status={200}
        />
        <Headers
          cacheControl='max-age=1s'
        />
      </div>
    )
    const headers = Headers.rewind()

    expect(headers).to.deep.equal({
      status: '200'
    , cacheControl: 'max-age=1'
    })
  })

  it('merges all headers present', () => {
    DOM.renderToString(
      <div>
        <Headers
          status={200}
        />
        <Headers
          status={404}
        />
      </div>
    )
    const headers = Headers.rewind()

    expect(headers).to.deep.equal({
      status: '404'
    })
  })

})

