import React, { Component } from 'react'
import config from '../config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'


import './PlantIndexPage.css'

class PlantIndexPage extends Component {
  state = {
    userId: 1,
    plants: [],
    favs: [],
    error: '',
    filter: 0,
  }

  componentDidMount(){
	this.getPlants(this.state.filter)
	this.getFavorites()
  }

  getFavorites = () => {
    return fetch(`${config.API_ENDPOINT}/plants/fav_plant/${this.state.userId}`, {
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
	if( res.length > 0){
  	    let formattedFavs = []
	    res.forEach(fav => {
	        formattedFavs.push(fav.plant_id)
 	    })
            this.setState({favs: formattedFavs})
	}
      })
      .catch(error => this.setState({error}))
  }

  getPlants = (category) => {
    if( category === 10 ){
      return fetch(`${config.API_ENDPOINT}/plants`, {
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
          if( res.length > 0){
              let favPlants = []
	      let favs = this.state.favs

              res.forEach(plant => {
		  if( this.state.favs.includes(plant.id) ){
		    favPlants.push(plant)
		  }
              })
              this.setState({plants: favPlants})
          }
        })
        .catch(error => this.setState({error}))
    }else if( category > 0 ){
      return fetch(`${config.API_ENDPOINT}/plants/${category}`, {
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
          this.setState({plants: res})
        })
        .catch(error => this.setState({error}))	
    }else{
      return fetch(`${config.API_ENDPOINT}/plants`, {
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
          this.setState({plants: res})
        })
        .catch(error => this.setState({error}))
    }
  }

  viewPlantInfo = (plant) => {
    this.props.history.push(`/plantcard/${plant}`)
  }

  renderPlantGallery = () => {
	const plants = this.state.plants
	let gallery = plants.map(plant=> {
	    let image = `./images/${plant.image}`
	    let exploded = plant.description.split(" ")
		let snippet = ''
	    let plantId = plant.id

	    for(let i = 0; i <= 25; i++){
		snippet += exploded[i] + ' '
	    }
	    let starClass = 'fa-1 fav-star-grey'
	    if( this.state.favs.length > 0 && this.state.favs.includes(plant.id) ){
		starClass = 'fa-1 fav-star-gold'
	    }

	    return(
		<div key={plant.id} className='plantThumb' onClick={()=>this.viewPlantInfo(plant.id)}>
	          <div className='plant-img fa-pull-left'><img src={image} title={plant.name} alt={plant.name}/></div>
        	  <div className='favStar'><FontAwesomeIcon icon={faStar} className={starClass} aria-hidden="true"/></div>
	          <div className='plant-title'><strong>{plant.name}</strong></div>
		  {snippet}...
        	  <br/><br/>
	          <button onClick={()=>this.viewPlantInfo(plant.id)}>read more >></button>
        	  </div>
	    )
	})
	return gallery	
  }

  sortPlantGallery = (ev) => {
    let filter = parseInt(ev.target.value)
	this.setState({filter: filter})
	this.getPlants(filter)
  }

  render(){
    return(
        <div className="plant-index-page">
          <h2>Plant Gallery</h2>
	  <select id='filterOptions' onChange={this.sortPlantGallery}>
            <option>Filter by</option>
	    <option value='0'>View All</option>
            { this.state.favs.length > 0 ? <option value='10'>My Favorite Plants</option> : ''}
            <option value='1'>View Flowers</option>
            <option value='2'>View Fruits/Trees</option>
            <option value='3'>View Herbs</option>
            <option value='4'>View Vegetables</option>
          </select>

        <section>
	    { this.state.plants.length > 0 ? this.renderPlantGallery() : '' }
        </section>

        </div>
    )
  }

}

export default PlantIndexPage
