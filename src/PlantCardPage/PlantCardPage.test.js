import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CalendarPage from './CalendarPage'


describe(`Calendar Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><CalendarPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
