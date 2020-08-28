import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {

  render(){
    return (
      <nav className='Nav'>
        <ul>
 	        <li>
            <Link to={'/'}>Home</Link>
	        </li>
	        <li>
            <Link to={'/calendar'}>My Calendar</Link>
	        </li>
	        <li>
            <Link to={'/plants'}>Plant Index</Link>
	        </li>
	        <li>
            <Link to={'/account'}>My Account</Link>
	        </li>
        </ul>      
      </nav>
    )
  }
}

export default Nav