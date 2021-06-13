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
  expect(
    screen.getByText('child').closest('.ant-typography')).toBeInTheDocument()
})

it('output has additional className(s) when specified', () => {
  render(
    <ReactAntdown className='foo bar'>
      child
    </ReactAntdown>
  )
  expect(screen.getByText('child').closest('.foo')).toBeInTheDocument()
  expect(screen.getByText('child').closest('.bar')).toBeInTheDocument()
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

it('honors react-markdown props by passing them to react-markdown', () => {
  const markdown = '[link](https://test.com)'
  render(
    <ReactAntdown
      linkTarget="_blank"
    >
      {markdown}
    </ReactAntdown>
  )
  expect(screen.getByText('link').closest('a')).toHaveAttribute('target', '_blank')
})