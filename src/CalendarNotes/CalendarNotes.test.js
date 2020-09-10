import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CalendarNotes from './CalendarNotes'


describe(`Calendar Notes Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    const match = { params: {month: 9, day: 8} }
    ReactDOM.render(<BrowserRouter><CalendarNotes match={match}/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
