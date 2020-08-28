import React, { Component } from 'react'
import './AccountPage.css'

class AccountPage extends Component {
	state = {
		zipFormShow: 0
	}

	showZipForm(){
		this.setState({zipFormShow:1});
	}
  render(){
    return(
	<div className='accountpage'>
	    <div className='account-content'>
		<h4>Gardener Profile</h4>
		<blockquote><strong>Your Zip Code: 95132</strong> <button onClick={()=> this.showZipForm()}>edit</button></blockquote>
		{this.state.zipFormShow ? <div className='zipForm'><form>
			<label>Enter a new zip code:</label>&nbsp;<input name='zipcode' id='zipcode' placeholder='new zip code'/> <button>update</button></form></div> : ''}
		<div>

		</div>
		<blockquote><br/><br/>
			<strong>Your Plant Hardiness Zone: 10a</strong>
			<p>
			Southern inland California, southern Florida and Hawaii are the three small areas where the average minimum winter temperature 
			only falls between 30 to 40 degrees F. The ability of Zone 10 gardeners to avoid freezing temperatures is a huge bonus for winter 
			gardening, but the extreme heat of the summer months limits planting possibilities.
			</p>
			<p>Zone 10a has a minimum average temperature of 30 to 35 degrees F</p>
		</blockquote>
	    </div>
	</div>
    )
  }

}

export default AccountPage
