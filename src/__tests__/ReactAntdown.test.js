import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, screen} from '@testing-library/react'
import ReactAntdown from '../ReactAntdown'

it('returns props.children', () => {
  render(
    <ReactAntdown>
      child
    </ReactAntdown>
  )
  expect(screen.getByText('child')).toBeInTheDocument()
})

it('output has className \'.ant-typography\'', () => {
  render(
    <ReactAntdown>
      child
    </ReactAntdown>
  )
  expect(screen.getByText('child').closest('.ant-typography')).toBeInTheDocument()
})

it('returns HTML when props.children is a Markdown-formatted string', () => {
  const markdown = '# title'
  render(
    <ReactAntdown>
      {markdown}
    </ReactAntdown>
  )
  expect(screen.getByText('title').closest('h1')).toBeInTheDocument()
})