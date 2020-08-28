import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf,faSun  } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css'

class HomePage extends Component {

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

		<section className='plant-of-the-day'>
			<table>
				<tbody>
				<tr><td>Plant of the Day</td></tr>
				<tr><td>
				<div className='potd-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-5x' aria-hidden="true"/><br/>plant image</div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
				Maecenas ac eros quis leo accumsan elementum. In ultricies ornare urna non euismod. Nulla ut rhoncus ipsum, id semper mi. 
				In hac habitasse platea dictumst. Morbi vitae ultrices metus.
				
				<p>Aliquam malesuada nunc vitae interdum suscipit. Integer lectus dui, malesuada quis sollicitudin id, consectetur in nibh. Duis vel ornare tortor. Sed bibendum est sapien, malesuada
				 tincidunt mi tincidunt ac. Nullam accumsan dolor velit. Donec massa tellus, tempus et nisl in, ullamcorper convallis lacus.</p>


				</td></tr>
				</tbody>
			</table>
		</section>
		<section className='weather-today'>
			<table>
				<tbody>
				<tr><td>Today's Weather</td></tr>
				<tr><td><FontAwesomeIcon icon={faSun} className='fa-2x' aria-hidden="true"/> Sunny, probably.</td></tr>
				</tbody>
			</table>
		</section>	
		</div>
    )
  }

}

export default HomePage
