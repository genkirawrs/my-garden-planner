import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf,faStar  } from '@fortawesome/free-solid-svg-icons';


import './PlantCardPage.css';

class PlantCardPage extends Component {
  state = {
    displayNotes: 0,
    error: null,
    userId: 1,

  }

  componentDidMount(){
    let favs = ['1','2','4','6','8'];
    if( favs.includes(this.props.match.params.plantId)){
      this.setState({displayNotes:1});
    }
  }

  render(){
    let button = <FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/>;
    let form = '';
    if(this.state.displayNotes === 1){
      button = <FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/>;
      form = <form><h3>You've added this plant to your favorites, would you like to add any notes?</h3><textarea className='addNoteField'></textarea><br/><button>Add Plant Note</button></form>;
    }

  

    return(
        <div className='plant-card-page'>
          <h2>{button}Plant #{this.props.match.params.plantId}'s Info</h2>
          <blockquote>
          <div className='potd-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-5x' aria-hidden='true'/><br/>plant image</div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
				Maecenas ac eros quis leo accumsan elementum. In ultricies ornare urna non euismod. Nulla ut rhoncus ipsum, id semper mi. 
				In hac habitasse platea dictumst. Morbi vitae ultrices metus.
				
				<p>Aliquam malesuada nunc vitae interdum suscipit. Integer lectus dui, malesuada quis sollicitudin id, consectetur in nibh. Duis vel ornare tortor. Sed bibendum est sapien, malesuada
				 tincidunt mi tincidunt ac. Nullam accumsan dolor velit. Donec massa tellus, tempus et nisl in, ullamcorper convallis lacus.</p>

         <p>Aliquam malesuada nunc vitae interdum suscipit. Integer lectus dui, malesuada quis sollicitudin id, consectetur in nibh. Duis vel ornare tortor. Sed bibendum est sapien, malesuada
				 tincidunt mi tincidunt ac. Nullam accumsan dolor velit. Donec massa tellus, tempus et nisl in, ullamcorper convallis lacus.</p>

         <p>Aliquam malesuada nunc vitae interdum suscipit. Integer lectus dui, malesuada quis sollicitudin id, consectetur in nibh. Duis vel ornare tortor. Sed bibendum est sapien, malesuada
				 tincidunt mi tincidunt ac. Nullam accumsan dolor velit. Donec massa tellus, tempus et nisl in, ullamcorper convallis lacus.</p>

          </blockquote>
          <blockquote>
            {form}
          </blockquote>
        </div>
    )
  }

}

export default PlantCardPage
