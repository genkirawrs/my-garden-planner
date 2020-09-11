import React, { Component } from 'react';
import config from '../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faPenSquare  } from '@fortawesome/free-solid-svg-icons';


import './CalendarPage.css';

class CalendarPage extends Component {
  state = {
    notes: [],
    error: null,
    userId: 1,
    year: 0,
    currMonth: 0,
    next: 0,
    next_max: 12,//limit it to the end of this year for now
    prev: 0,
    prev_min: 1,//limit it to beginning of this year for now
    displayCal: 0,
  }

  componentDidMount() {
    const d = new Date();
    const currMonth = d.getMonth() + 1
    const next = currMonth + 1
    const prev = currMonth - 1
    const year = d.getFullYear()
    this.setState({ year:year, currMonth:currMonth, next:next, prev:prev, displayCal: 1 })
    this.getCalendarNotes(year, currMonth)
  }

  getCalendarNotes(year, month) {
    let start = parseInt(`${year}${month}1`)
    let lastDay = 32 - new Date(year, month+1, 32).getDate()
    let end = parseInt(`${year}${month}${lastDay}`)

    return fetch(`${config.API_ENDPOINT}/calendar/month/${this.state.userId}/${start}/${end}`, {
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
	let formattedNotes = []
	res.forEach(note => {
	    formattedNotes[note.day] = note
	})
	this.setState({notes: formattedNotes})
      })
      .catch(error => this.setState({error}))
  }

  formatCalNotes = (notes) => {

  }

  openCalNote = (month,day) => {
    this.props.history.push(`/calendarNotes/${month}/${day}`)
  }

  renderCalLayout = (year, month) => {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let dateString = `${month}/01/${year}`;

    if( month < 10 ){
	dateString = `0${month}/01/${year}`;
    }
    let firstDay = new Date(dateString).getDay()
    let lastDay = 32 - new Date(year, month+1, 32).getDate()
    let monthName = monthNames[month-1]
    let day = 1
    let counter = 0
    let rows = []

     for (let i = 0; i < 6; i++) {
	let cell = []
	let rowId = `row_${i}`
	for (let j = 0; j < 7; j++) {
	    let dayId = `day_${day}`
	    let dayNote = day
	    let dayValue = `${year}${month}${day}`
            if (i === 0 && j < firstDay) {
		cell.push(<td className='day' key={counter}></td>)
            }else if (day > lastDay) {
                break;
            }else {
		if( this.state.notes[dayValue] ){
		    cell.push(<td className='day' key={dayId}><div className='calDay'>{day}</div><button onClick={()=> this.openCalNote(month,dayNote)} className='view-notes'><FontAwesomeIcon icon={faPenSquare} className='fa-1x cal-icon view' aria-hidden='true'/>View Notes</button></td>)
		}else{
		    cell.push(<td className='day' key={dayId}><div className='calDay'>{day}</div>
			<button onClick={()=> this.openCalNote(month,dayNote)}><FontAwesomeIcon icon={faPlusSquare} className='fa-1x cal-icon' aria-hidden='true'/>Add Note</button>
		    </td>)
	    	}
                day++;
            }
	    counter++;
        }
	rows.push(<tr key={rowId}>{cell}</tr>)
    }
    return (
      <div>
	<h2>{monthName}</h2>
	<table className='plantCalendar' width='100%'><tbody>
	<tr><td className='dayHeader'>Sun</td><td className='dayHeader'>Mon</td><td className='dayHeader'>Tues</td><td className='dayHeader'>Wed</td><td className='dayHeader'>Thurs</td><td className='dayHeader'>Fri</td><td className='dayHeader'>Sat</td></tr>
	{rows}
	</tbody></table>
      </div>
    )
  }

  decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea')
    textArea.innerHTML = text
    return textArea.value
  }

  render(){
    return(
      <div className="calendar-page">
	{ this.state.displayCal === 1 ? this.renderCalLayout(this.state.year,this.state.currMonth) : ''}

      </div>
    )
  }

}

export default CalendarPage
