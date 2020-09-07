import React, { Component } from 'react'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './HomePage.css'

class HomePage extends Component {
  state = {
    user_id: 1,
    zipcode: '',
    weather: '',
    home_plant: {},
  }

  componentDidMount() {
    this.getRandomPlant()
    this.getZipcode()
    this.getWeather()
  }

  getRandomPlant = () => {
        const min = 1
        const max = 20
        const plant_id = Math.floor(Math.random() * (max - min + 1) + min)

        fetch(`${config.API_ENDPOINT}/plants/plant/${plant_id}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
	})
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(
          res => {
            if(res){
              this.setState({home_plant:res})
            }
          }
        )
        .catch()

  }

  getZipcode = () => {
	fetch(`${config.API_ENDPOINT}/account/${this.state.user_id}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(
          res => {
            if(res){
              this.setState({zipcode:res.zipcode})
	      this.getWeather(res.zipcode)

            }
          }
        )
        .catch()
  }

  getWeather = (zipcode) => {
    if( this.state.zipcode !== '' ){
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&appid=${config.OWM_API_KEY}&units=imperial`,{
            method: 'GET',
	    headers : { 
	      'Accept': 'application/json'
       	    }
        })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(
          res => {
            if(res){
              this.setState({weather:res})
            }
          }
        )
        .catch()
    }
  }

  renderPlantInfoDisplay = () => {
	const homepage_plant = this.state.home_plant
	const img_url = `./images/${homepage_plant.image}`
	return (
            <section className='plant-of-the-day'>
            	<strong className='home_section_title'>Plant Roulette: {homepage_plant.name}</strong>
                <div>
                    <div className='potd-img fa-pull-left'><img src={img_url} title={homepage_plant.name} alt={homepage_plant.name}/></div>
		    <blockquote>{homepage_plant.description}</blockquote>
		</div>
            </section>
	)
  }

  renderCurrentWeather = () => {
    if( this.state.weather !== '' ){
	const weather = this.state.weather
	const current_temp = Math.ceil(weather.main.temp)
	const feels_like = Math.ceil(weather.main.feels_like)
	const icon = weather.weather[0].icon
	const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`
	const icon_desc = weather.weather[0].description
	return(
            <section className='weather-today'>
		<strong className='home_section_title'>Your Current Weather</strong><br/>
		<div>
                    <div className='weather-icon fa-pull-left'><img src={icon_url} title={icon_desc} alt={icon_desc}/></div>
		    Location: {weather.name}<br/>
   		    Currently: {current_temp}F<br/>
		    Feels Like: {feels_like}F<br/>
    		</div>
            </section>
	)
    }
  }

  render(){
    return(
	<div className='homepage'>
	    <div className='home-content'>
		<h4>Welcome to our Demo!</h4>
		<blockquote><strong>What can this garden planner do for you?</strong><br/></blockquote>
		<blockquote>
			Whether you're a new gardener looking for a place to get started or an experienced green thumb in need of inspiration - try My Garden 
			Planner out! Set your zip code to view your local weather forecast and plant hardiness zone. Take a look through our plant gallery for 
			inspiration and add any to your favorites list. Use our calendar to plan out your garden's planting and care schedule. 
		</blockquote>
		<blockquote>
		My Garden Planner's goal is to help take the logistics out of gardening so you can get to the fun stuff :)
		</blockquote>
	    </div>

	    {this.state.home_plant ? this.renderPlantInfoDisplay() : '' }

	    {this.state.weather ? this.renderCurrentWeather() : '' }
	</div>
    )
  }

}

export default HomePage
