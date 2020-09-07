import React, { Component } from 'react';
import config from '../config';

import './CalendarNotes.css';

class CalendarNotes extends Component {
  state = {
    notes: [],
    notesId: 0,
    error: null,
    userId: 1,
    month: parseInt(this.props.match.params.month),
    day: this.props.match.params.day,
    noteUpdateStatus: '',
  }

  displayMonthName = () => {
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
	return months[this.state.month-1]
  }

  componentDidMount() {
	this.getDayNotes()
  }

  getDayNotes = () => {
    const d = new Date();
    const year = d.getFullYear()

    let dayValue = parseInt(`${year}${this.state.month}${this.state.day}`)

    return fetch(`${config.API_ENDPOINT}/calendar/note/${this.state.userId}/${dayValue}`, {
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
	    this.setState( {notes: [res], notesId: res.id} )
	}
      })
      .catch(error => this.setState({error}))
  }

  noteFormSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const data = new FormData(form)
        
	const new_notes = data.get('addNoteField')
	const d = new Date();
	const year = d.getFullYear()
	let dayValue = parseInt(`${year}${this.state.month}${this.state.day}`)

    if( this.state.notesId > 0 ){
	//there's already an entry in the db, update it
	return fetch(`${config.API_ENDPOINT}/calendar/edit/${this.state.userId}/${this.state.notesId}`, {
	method: 'PATCH',
	headers: {
            'content-type': 'application/json',
	},
        body: JSON.stringify({
	    user_id: this.state.userId,
	    day: dayValue,
	    notes: new_notes
        }),
	})
	.then(res =>{
            if(!res.ok){
	        throw new Error(res.status)
            }
            if(res.status === 204){
                this.setState({noteUpdateStatus:'Notes Saved!'})
                this.getDayNotes()
            }else{
                this.setState({noteUpdateStatus: 'Sorry, there was an error. Please try again later.'})
            }
	})
    }else{
	//add
        return fetch(`${config.API_ENDPOINT}/calendar/add/${this.state.userId}/${dayValue}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            user_id: this.state.userId,
            day: dayValue,
            notes: new_notes
        }),
        })
        .then(res =>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .then( res => {
	    this.setState({noteUpdateStatus:'Notes Saved!'})
	    this.getDayNotes()
	})
        .catch(error => this.setState({error}))
    }
  }

  deleteCalNote = () => {
    fetch(`${config.API_ENDPOINT}/calendar/${this.state.userId}/${this.state.notesId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        note_id: this.state.notesId,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
      })
      .then(()=>{
        this.setState({noteUpdateStatus:'Notes Deleted!'})
	this.getDayNotes()
      })
      .catch()
  }

  render(){
    const monthTitle = this.displayMonthName()
    const notes = this.state.notes
    return(
      <div className='calendar-note'>
        <h2>{monthTitle} {this.state.day}'s Notes</h2>

        <blockquote id='currentNotes'>
          { notes.length > 0 ? notes[0].notes : 'No notes yet!'}
        </blockquote>

        <blockquote className='addNoteContainer'>
            <form onSubmit={this.noteFormSubmit}>
                <label><h3>Notes:</h3></label>
		<textarea className='addNoteField' id='addNoteField' name='addNoteField' defaultValue={notes.length > 0 ? notes[0].notes : ''}>
		</textarea>
                <br/><input type='submit' value='Save Notes'/>&nbsp;&nbsp;&nbsp;
		{ this.state.notesId > 0 ? <button onClick={()=>this.deleteCalNote()}>Delete Note</button> : '' }
                <br/>
                {this.state.noteUpdateStatus !== "" ? this.state.noteUpdateStatus : ''}
            </form>

        </blockquote>
      </div>
    )
  }

}

export default CalendarNotes
