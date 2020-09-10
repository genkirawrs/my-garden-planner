import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PlantIndexPage from './PlantIndexPage'


describe(`Calendar Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><PlantIndexPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
