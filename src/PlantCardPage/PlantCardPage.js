import React, { Component } from 'react'
import config from '../config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'


import './PlantCardPage.css'

class PlantCardPage extends Component {
  state = {
    plantId: parseInt(this.props.match.params.plantId), 
    displayNotes: 0,
    error: '',
    userId: 1,
    isFav: 0,
    favInfo: [],
    plantInfo: [],
    noteUpdateStatus: '',
  }

  componentDidMount(){
	this.getPlantInfo()
	this.getFavInfo()
  }

  getPlantInfo = () => {
      return fetch(`${config.API_ENDPOINT}/plants/plant/${this.state.plantId}`, {
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
        .then( res => {
	  if( res ){
            this.setState({plantInfo: [res]})
	  }
        })
        .catch(error => this.setState({error}))
  }

  getFavInfo = () => {
      return fetch(`${config.API_ENDPOINT}/plants/fav_plant/${this.state.userId}/${this.state.plantId}`, {
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
        .then( res => {
	  if( res.id ){
            this.setState({isFav: 1, favInfo: res, noteUpdateStatus:''})
	  }
        })
        .catch(error => this.setState({error}))
  }

  setFav = () => {
	return fetch(`${config.API_ENDPOINT}/plants/fav_plant/${this.state.userId}/${this.state.plantId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
            user_id: this.state.userId,
            plant_id: this.state.plantId
        })	
	})
        .then(res =>{
          if(!res.ok){
              throw new Error(res.status)
          }
          return res.json()
        })
        .then( res => {
            this.setState({isFav: 1, favInfo: res, noteUpdateStatus:''})
	    this.getFavInfo()
        })
        .catch(error => this.setState({error}))
  }

  removeFav = () => {
	const favId = this.state.favInfo.id
        return fetch(`${config.API_ENDPOINT}/plants/fav_plant/${this.state.userId}/${favId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
            fav_id: favId,
        })
        })
        .then(res =>{
          if(!res.ok){
              throw new Error(res.status)
          }
            this.setState({isFav: 0, favInfo: []})
            this.getFavInfo()
        })
        .catch(error => this.setState({error}))
  }

  renderFavNotes = () => {
    const favInfo = this.state.favInfo
	let notes = favInfo.notes
	if( notes ===  null ){
	    notes = ''
	}else{
	    notes = this.decodeHtml(notes)
	}
	
	return (
	    <blockquote> 
	    
            <div id='currentNotes'>
              { favInfo.notes !== '' ? <h3>Current Notes</h3> : ''}
	      {notes}
	      <br/><br/>
            </div>
	    <form onSubmit={this.favFormSubmit}>
		{ favInfo.notes !== '' ? <h3>Notes</h3> : <h3>You've added this plant to your favorites, would you like to add any notes?</h3>}
		<textarea className='addNoteField' name='favNotesField' id='favNotesField' defaultValue={favInfo.notes}></textarea>
		<br/><input type='submit' value='Save Notes'/>
		<br/>{this.state.noteUpdateStatus !== "" ? this.state.noteUpdateStatus : ''}
	    </form>
	    </blockquote>
	)
  }

  favFormSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const data = new FormData(form)

        const new_notes = data.get('favNotesField')
	const fav_id = this.state.favInfo.id

        return fetch(`${config.API_ENDPOINT}/plants/fav_plant/${this.state.userId}/${fav_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            id: fav_id,
            notes: new_notes
        }),
        })
        .then(res =>{
            if(!res.ok){
                throw new Error(res.status)
            }
            if(res.status === 204){
                this.setState({noteUpdateStatus:'Notes Saved!'})
                this.getFavInfo()
            }else{
                this.setState({noteUpdateStatus: 'Sorry, there was an error. Please try again later.'})
            }
        })
  }

  decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  render(){
    let plant = this.state.plantInfo
    if( plant.length > 0 ){
	plant = plant[0]

      const image = `/images/${plant.image}`
      let star = <FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/>
      let favButton = <button onClick={()=>this.setFav()}>Add to Favorites</button>

      if(this.state.isFav === 1 ){
        star = <FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/>
	favButton = <button onClick={() => this.removeFav()}>Delete Favorite</button>
      }

      return(
        <div className='plant-card-page'>
          <h2>{star}{plant.name}&nbsp;&nbsp;&nbsp;{favButton}</h2>
          <blockquote>
          <div className='potd-img card-img fa-pull-left'><img src={image} title={plant.name} alt={plant.name}/></div>
		{plant.description}
		<p>Plant Type: {plant.plant_type}</p>
		<p>Sun Requirements: {plant.sun}</p>
		<p>Ideal Grow Zones: {plant.zones}</p>
		<p>Soil Preferences: {plant.soil}</p>
          </blockquote>
          <blockquote>
            { this.state.isFav === 1 ? this.renderFavNotes() : '' }
          </blockquote>
        </div>
      )
    }else{
	return(<div className='plant-card-page'>
          <h2>Sorry, no plant info found</h2>
	</div>
	)
    }
  }

}

export default PlantCardPage
