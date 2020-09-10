import React, { Component } from 'react'
import config from '../config';
import './AccountPage.css'

class AccountPage extends Component {
  state = {
    zipFormShow: 0,
    userId: 1,//demo uid
    zipcode: '',
    zoneInfo: '',
    error: null,
    zipUpdateStatus: '',
  }

  componentDidMount() {
    this.getUserById()
  }

  getUserById = () => {
    return fetch(`${config.API_ENDPOINT}/account/${this.state.userId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }})
      .then(res =>{
        if(!res.ok){
	    throw new Error(res.status)
	}
	return res.json()
      })
      .then( res => this.setInfo(res.zipcode))
      .catch(error => this.setState({error}))
  }

  updateUserZipcode = (userId,zipcode) => {
    return fetch(`${config.API_ENDPOINT}/account/${userId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        zipcode: zipcode
      }),
    })
      .then(res =>{
        if(!res.ok){
            throw new Error(res.status)
        }
	if(res.status === 204){
	    this.setState({zipUpdateStatus:'',zipcode:zipcode, zipFormShow:0})
	    this.getUserZone()
	}else{
	    this.setState({zipUpdateStatus: 'Sorry, there was an error. Please try again later.'})
	}
      })
  }

  getUserZone = () => {
    if( this.state.zipcode !== '' ){
      return fetch(`${config.API_ENDPOINT}/account/zone/${this.state.zipcode}`, {
       method: 'GET',
        headers: {
          'content-type': 'application/json',
        }})
      .then(res =>{
        if(!res.ok){
            throw new Error(res.status)
        }
	if( res.status === 200){
	    return res.json()
	}else{
	    return ''
	}
      })
      .then(res => {
	this.setZone(res)
      })
      .catch()
    }
  }

  setZone = info => {
	this.setState({zoneInfo: info})
  }

  setInfo = zipcode => {
	this.setState({zipcode})
	this.getUserZone(zipcode)
  }

  showZipForm = () => {
    this.setState({zipFormShow:1})
  }

  hideZipForm = () => {
    this.setState({zipFormShow:0})
  }

  renderZoneInfo = () => {
	const zone = this.state.zoneInfo
	
     if( zone !== '' ){
	return(
            <div className='hardiness-zone'><br/><br/>
                <strong>Your Plant Hardiness Zone: {zone.zone}</strong>
		<p>{zone.zone_description}</p>
		<p>Zone Hardy to about: {zone.zone_hardiness}</p>
		<p>First Frost Date Range: {zone.zone_first_frost}</p>
		<p>Last Frost Date Range: {zone.zone_last_frost}</p>
            </div>
	)
    }else{
	return (<blockquote><strong>Sorry, no grow zone information found for your zip code</strong></blockquote>)
    }
  }

  displayZipError = () => {
	return (
	    <p className='zipUpdateError'>{this.state.zipUpdateStatus}</p>
	)
  }

  renderZipForm = () => {
	return(
	  <div className='zipForm'>
	    <form onSubmit={this.zipFormSubmit}>
		<label>Enter a new zip code:</label>
		<br/><input type='text' className='zipcode-input' name='zipcode' id='zipcode' placeholder='new zip code' required/> 
		&nbsp;&nbsp;<input type='submit' value='update' className='submit-button'/>
		<button onClick={()=> this.hideZipForm()} className='cancel-button'>cancel</button>
		<br/>
		<span className='zip-note'>*please note, grow zones only support U.S. zip codes currently</span>
		{this.state.zip_update_status !== "" ? this.displayZipError() : ''}
	    </form>
	  </div>
	)
  }

  zipFormSubmit = (ev) => {
	ev.preventDefault()
	const form = ev.target
	const data = new FormData(form)
	const new_zipcode = data.get('zipcode')

	if(new_zipcode.length !== 5){
	    this.setState({zipFormShow:1, zipUpdateStatus: 'Please enter a valid US zipcode'})
	}

	const validDigits = ['0','1','2','3','4','5','6','7','8','9']

	for (var i = 0; i < new_zipcode.length; i++) {
	    if( !validDigits.includes(new_zipcode[i]) ){
		this.setState({zipFormShow:1,zipUpdateStatus: 'Please enter a valid US zipcode'})	
		return;
	    }
	}

	this.updateUserZipcode(this.state.userId, new_zipcode)
  }

  render(){
    return(
	<div className='accountpage'>
	    <div className='account-content'>
		<h4>Gardener Profile</h4>
		<div className='account-zipcode'><strong>Your Zip Code: {this.state.zipcode}</strong> <button onClick={()=> this.showZipForm()}>edit</button></div>
		{this.state.zipFormShow ? this.renderZipForm() : ''}
		{this.state.zoneInfo !== '' ? this.renderZoneInfo() : <blockquote><strong>Sorry, no grow zone information found for your zip code</strong></blockquote> }
	    </div>
	</div>
    )
  }

}

export default AccountPage
