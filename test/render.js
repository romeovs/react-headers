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
      'Status': '200'
    , 'Cache-Control': 'max-age=1'
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
      'Status': '404'
    })
  })

  it('renders to nothing', () => {
    const res = DOM.renderToStaticMarkup(
      <Headers
        status={200}
      />
    )

    Headers.rewind()
    expect(res).to.equal('<noscript></noscript>')
  })

  it('accepts unknown headers', () => {
    DOM.renderToStaticMarkup(
      <Headers
        foo='bar'
      />
    )

    const headers = Headers.rewind()

    expect(headers).to.deep.equal({
      'Foo': 'bar'
    })
  })
})

