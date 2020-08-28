import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'


describe(`Footer Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
