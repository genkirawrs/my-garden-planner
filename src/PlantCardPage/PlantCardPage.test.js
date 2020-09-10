import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PlantCardPage from './PlantCardPage'


describe(`Calendar Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    const match = { params: {plantId: 2} }
    ReactDOM.render(<BrowserRouter><PlantCardPage match={match} /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
