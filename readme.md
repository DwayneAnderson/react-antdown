![version](https://img.shields.io/npm/v/react-antdown)
![build](https://github.com/DwayneAnderson/react-antdown/actions/workflows/build.yml/badge.svg)
![test](https://github.com/DwayneAnderson/react-antdown/actions/workflows/test.yml/badge.svg)
![coverage](https://img.shields.io/codecov/c/github/dwayneanderson/react-andown/main)

# react-antdown

Simply put, this component wraps the output of
[react-markdown](https://www.npmjs.com/package/react-markdown) with a
className of `.ant-typography`, ensuring that the HTML output of react-markdown
will pick up CSS rules as defined by [Ant Design](https://ant.design/).

## Install

Install [react-antdown npm module](https://www.npmjs.com/package/react-antdown) as a dependency of your `antd` project with `npm`.
```
npm install react-antdown --save
```
or, with `yarn`...
```
yarn add react-antdown
```

## Basic Usage

```
import React from 'react'
import ReactAntdown from 'react-antdown'

const someMarkdown = `# This is the title

This is some text

* List item 1
* List item 2
  * List item 2.1
  * List item 2.2

This is a [link](https://www.google.com/?q=markdown)`

const MyComponent = () => {
  return (
    <ReactAntdown>
      {someMarkdown}
    </ReactAntdown>
  )
}

export default MyComponent
```

## API
### `props`

*   `children` (`string`, default: `''`)\
    The Markdown to pass to ReactMarkdown
*   `className` (`string?`)\
    Any additional className(s), to be appended to the defaults: `'react-antdown'`, `'ant-typography'`

Any other props specified will be passed along to the internal instance of `react-markdown`.

The full list of [props that react-markdown supports](https://github.com/remarkjs/react-markdown) can be
viewed in the [react-markdown documentation on GitHub](https://github.com/remarkjs/react-markdown).
