import React from 'react'
import ReactMarkdown from 'react-markdown'

const ReactAntdown = ({children}) => {
  return (
    <ReactMarkdown className='ant-typography'>
      {children}
    </ReactMarkdown>
  )
}

export default ReactAntdown