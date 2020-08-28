import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faStar  } from '@fortawesome/free-solid-svg-icons';


import './PlantIndexPage.css';

class PlantIndexPage extends Component {
  viewPlantInfo(plant){
    this.props.history.push(`/plantcard/${plant}`)
  }

  render(){
    return(
        <div className="plant-index-page">
          <h2>Plant Gallery</h2>
          <select>
            <option>Filter by</option>
            <option>My Favorite Plants</option>
            <option>View Herbs</option>
            <option>View Flowers</option>
            <option>View Trees</option>
            <option>View Fruits</option>
          </select>

        <section>
        <div className='plantThumb' onClick={()=>this.viewPlantInfo(1)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/></div>
				<strong>plant 1</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
				<br/><br/>
        read more >> 
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(2)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/></div>
          <strong>plant 2</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
          <br/><br/>
          read more >> 
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(3)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
          <strong>plant 3</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
          <br/><br/>
          read more >> 
           </div>
          <div className='plantThumb' onClick={()=>this.viewPlantInfo(4)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/></div>
				<strong>plant 4</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
          <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(5)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
          <strong>plant 5</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(6)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/></div>
          <strong>plant 6</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>
          <div className='plantThumb' onClick={()=>this.viewPlantInfo(7)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
				<strong>plant 7</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(8)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-gold' aria-hidden="true"/></div>
          <strong>plant 8</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(9)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
          <strong>plant 9</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(10)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
				<strong>plant 10</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

          <div className='plantThumb' onClick={()=>this.viewPlantInfo(11)}>
          <div className='plant-img fa-pull-left'><FontAwesomeIcon icon={faLeaf} className='fa-2x' aria-hidden="true"/></div>
          <div className='favStar'><FontAwesomeIcon icon={faStar} className='fa-1x fav-star-grey' aria-hidden="true"/></div>
          <strong>plant 11</strong><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet urna. Phasellus ac ultricies dolor, ut finibus purus. 
        <br/><br/>
          read more >>
          </div>

        </section>

        </div>
    )
  }

}

export default PlantIndexPage
