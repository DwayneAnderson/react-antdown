import React from 'react'
import ReactMarkdown from 'react-markdown'

const ReactAntdown = (props) => {
  const { className, children, ...other } = props

  const classNames = [
    'react-antdown',
    'ant-typography',
    className || ''
  ]

  return (
    <ReactMarkdown
      className={classNames.join(' ').trim()}
      {...other}
    >
      {children}
    </ReactMarkdown>
  )
}

export default ReactAntdown
