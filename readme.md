# react-antdown

Simply put, this component wraps the output of [react-markdown](https://www.npmjs.com/package/react-markdown) with a className of `.ant-typography`

## Install

```
npm install react-antdown --save
```

## Usage

```
import React from 'react'
import ReactAntdown from 'react-antdown'

const someMarkdown = `
# This is the title

This is some text

* List item 1
* List item 2
  * List item 2.1
  * List item 2.2

This is a [link](https://www.google.com/?q=markdown)
`

const MyComponent = () => {
  return (
    <ReactAntdown>
      {someMarkdown}
    </ReactAntdown>
  )
}

export default MyComponent
```
