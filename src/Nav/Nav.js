import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  state = {currentPage: this.props.pathname}

  render(){
    return (
      <nav className='Nav'>
        <ul>
 	    <li>
		{ this.state.currentPage === 'home' ?
	            <Link to={'/'} className='current-page' onClick={() => this.setState({ currentPage: 'home' })}>Home</Link>
		    :
		    <Link to={'/'} onClick={() => this.setState({ currentPage: 'home' })}>Home</Link>
		}
	    </li>
	    <li>
                { this.state.currentPage === 'calendar' ?
            	    <Link to={'/calendar'} className='current-page' onClick={() => this.setState({ currentPage: 'calendar' })}>My Calendar</Link>
		    :
                    <Link to={'/calendar'} onClick={() => this.setState({ currentPage: 'calendar' })}>My Calendar</Link>
		}
	    </li>
	    <li>
                { this.state.currentPage === 'plants' ?
              	    <Link to={'/plants'} className='current-page' onClick={() => this.setState({ currentPage: 'plants' })}>Plants</Link>
                    :
                    <Link to={'/plants'} onClick={() => this.setState({ currentPage: 'plants' })}>Plants</Link>
                }

	    </li>
	    <li>
                { this.state.currentPage === 'account' ?
            	    <Link to={'/account'} className='current-page' onClick={() => this.setState({ currentPage: 'account' })}>My Account</Link>
		    :
                    <Link to={'/account'} onClick={() => this.setState({ currentPage: 'account' })}>My Account</Link>
		}
	    </li>
        </ul>      
      </nav>
    )
  }
}

export default Nav
