import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar  } from '@fortawesome/free-solid-svg-icons';


import './CalendarPage.css';

class CalendarPage extends Component {
  state = {
    events: [],
    error: null,
    userId: 1,
    month: 8,
    next: 9,
    prev: 7,
  }

  openCalNote(day){
    this.props.history.push(`/calendarNotes/${day}`)
  }

  render(){
    return(
      <div className="calendar-page">
        <h2>August</h2>
        <table className='plantCalendar' width="100%">
        <tbody>
          <tr><td className='dayHeader'>Sun</td><td className='dayHeader'>Mon</td><td className='dayHeader'>Tues</td><td className='dayHeader'>Wed</td><td className='dayHeader'>Thurs</td><td className='dayHeader'>Fri</td><td className='dayHeader'>Sat</td></tr>
          <tr><td className='day'></td><td className='day'></td><td className='day'></td><td className='day'></td><td className='day'></td><td className='day'></td><td className='day' onClick={()=> this.openCalNote(1)}><div className='calDay'>1</div></td></tr>
          <tr><td className='day' onClick={()=> this.openCalNote(2)}><div className='calDay'>2</div></td><td className='day' onClick={()=> this.openCalNote(3)}><div className='calDay'>3</div>View Notes</td><td className='day' onClick={()=> this.openCalNote(4)}><div className='calDay'>4</div></td><td className='day'><div className='calDay' onClick={()=> this.openCalNote(5)}>5</div></td><td className='day' onClick={()=> this.openCalNote(6)}><div className='calDay'>6</div></td><td className='day' onClick={()=> this.openCalNote(7)}><div className='calDay'>7</div></td><td className='day' onClick={()=> this.openCalNote(8)}><div className='calDay'>8</div></td></tr>
          <tr><td className='day' onClick={()=> this.openCalNote(9)}><div className='calDay'>9</div></td><td className='day' onClick={()=> this.openCalNote(10)}><div className='calDay'>10</div></td><td className='day' onClick={()=> this.openCalNote(11)}><div className='calDay'>11</div></td><td className='day'><div className='calDay' onClick={()=> this.openCalNote(12)}>12</div></td><td className='day' onClick={()=> this.openCalNote(13)}><div className='calDay'>13</div></td><td className='day' onClick={()=> this.openCalNote(14)}><div className='calDay'>14</div></td><td className='day' onClick={()=> this.openCalNote(15)}><div className='calDay'>15</div></td></tr>
          <tr><td className='day' onClick={()=> this.openCalNote(16)}><div className='calDay'>16</div></td><td className='day' onClick={()=> this.openCalNote(17)}><div className='calDay'>17</div></td><td className='day' onClick={()=> this.openCalNote(18)}><div className='calDay'>18</div></td><td className='day'><div className='calDay' onClick={()=> this.openCalNote(19)}>19</div></td><td className='day' onClick={()=> this.openCalNote(20)}><div className='calDay'>20</div></td><td className='day' onClick={()=> this.openCalNote(21)}><div className='calDay'>21</div></td><td className='day' onClick={()=> this.openCalNote(22)}><div className='calDay'>22</div></td></tr>
          <tr><td className='day' onClick={()=> this.openCalNote(23)}><div className='calDay'>23</div></td><td className='day' onClick={()=> this.openCalNote(24)}><div className='calDay'>24</div></td><td className='day' onClick={()=> this.openCalNote(25)}><div className='calDay'>25</div></td><td className='day'><div className='calDay' onClick={()=> this.openCalNote(26)}>26</div></td><td className='day' onClick={()=> this.openCalNote(27)}><div className='calDay'>27</div></td><td className='day' onClick={()=> this.openCalNote(28)}><div className='calDay'>28</div></td><td className='day' onClick={()=> this.openCalNote(29)}><div className='calDay'>29</div></td></tr>
          <tr><td className='day' onClick={()=> this.openCalNote(29)}><div className='calDay'>29</div></td><td className='day' onClick={()=> this.openCalNote(31)}><div className='calDay'>31</div></td><td className='day'></td><td className='day'></td><td className='day'></td><td className='day'></td><td className='day'></td></tr>

        </tbody>
        </table>

      </div>
    )
  }

}

export default CalendarPage
