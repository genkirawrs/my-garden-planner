import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Homepage';


describe(`Home page Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HomePage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
