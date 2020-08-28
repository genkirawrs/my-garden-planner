import React, { Component } from 'react';

import './CalendarNotes.css';

class CalendarNotes extends Component {
  state = {
    events: [],
    error: null,
    userId: 1,
    month: 8,
    next: 9,
    prev: 7,
  }

  render(){
    return(
      <div className="calendar-note">
        <h2>August {this.props.match.params.day}'s Notes</h2>

        <blockquote>
          {this.props.match.params.day == 3 ? <ul><li>Water Herbs</li><li>Transplant Seedlings</li><li>Pick up more soil</li></ul> : 'No notes yet!'}
        </blockquote>

        <blockquote className='addNoteContainer'>
        <h3>Add Note:</h3>
          <form>
            <textarea className='addNoteField'></textarea>
            <br/>
            <button>Add Note</button>
          </form>
        </blockquote>
      </div>
    )
  }

}

export default CalendarNotes
