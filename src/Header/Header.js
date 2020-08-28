import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import './Header.css';


export default class Header extends Component {
  render() {
    return (
        <header>
	  <h1>
          <Link to='/'>
		My Garden Planner
		{' '}
		<FontAwesomeIcon icon={faSeedling}/>
	  </Link>
	  </h1>
        </header>
    )
  }
}
