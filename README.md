# react-headers

A declarative way to set HTTP headers from `react` components.

*NOTE: this project is very much under construction, you should <u>NOT</ul> use
it in production just yet.*

## Installation

Because this thing isn't finished yet, I've not put it on npm yet.  For now, you
can install it using:
```
npm install --save romeovs/react-headers
```

## Usage

```js
// in a component
import React   from 'react'
import Headers from 'react-headers'

class Foo extends React.Component {

  render () {
    // ...
    return (
      <div>
        // ...
        <Headers
          cacheControl = 'public; max-age=60'
          // could also be:
          // cacheControl = {{ public: true,  'max-age': 60   }}
          // CacheControl = {{ public: true,  maxAge: '1m' }}
        />
      </div>
    )
  }
}
```

When rendering on the server you can then do:

```js
ReactDOM.renderToString(<Foo/>)
const headers = Headers.rewind()
// { 'Cache-Control': 'public; max-age=60' }
```

You can then set these headers using `express` or `koa`.

## What's so special about this?

Setting the headers for a simple html page is simple enought using just
`react` and `express` or `koa`.  It becomes complicated however if you have
multiple components on the page that have their own concerns and need to
set their own headers.

For instance, consider a component `A`, that shows some data that should be cached
publicly with a `max-age` of `1w`.  Meanwhile component `B`, which might or
might not be shown together on the page with component `A`, contains data that
will turn stale after only `1d`.  It might be hard to figure out how to
reconcile these concerns, and to decide when to set which `max-age`.  Using
`react-headers` this is no longer a problem, because it merges the headers
of all active components on the page in a logical way.  In our example,
a page with both `A` and `B` on it (containing data that goes stale afer `1w` and data that goes
stale after `1d`), should go stale after `1d`, so `react-headers` merges the
headers to reflect this.

```
A -> Cache-Control: public; max-age=1w  --+
                                          | --> A + B -> Cache-Control: public; max-age=1d
B -> Cache-Control: public; max-age=1d  --+
```

`react-headers` has merging algorithms for the headers where it makes sense.

On top of that, `react-headers` provides some niceties such as a nice expiry
format (`1m`, `1d`, ...) for timeouts and dates and simple interpolations of
header formats.

## Roadmap

  1. Implement parsing and merging algorithms for all response headers
     where it makes sense to have them in `react-headers`
    - [ ] Acces-Control-Allow-Origin
    - [ ] Age
    - [x] Allow
    - [x] Cache-Control
    - [ ] Content-Disposition
    - [ ] Content-Language
    - [ ] Date
    - [ ] Expires
    - [x] Last-Modified
    - [x] Link
    - [ ] Refresh
    - [ ] Retry-After
    - [ ] Set-Cookie (?)
    - [x] Status
    - [ ] Warning
    - [ ] WWW-Authenticate (?)

  2. make sure the client-side included code is as small as possible

