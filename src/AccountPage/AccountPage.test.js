import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AccountPage from './AccountPage'


describe(`Account Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><AccountPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
