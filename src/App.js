import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import PlantIndexPage from './PlantIndexPage/PlantIndexPage';
import PlantCard from './PlantCardPage/PlantCardPage';
import CalendarPage from './CalendarPage/CalendarPage';
import CalendarNotes from './CalendarNotes/CalendarNotes';
import Account from './AccountPage/AccountPage';

import './App.css';

class App extends Component {
  render(){
        const pathname = window.location.pathname.substr(1)
        let path = (pathname.length > 0) ? pathname : 'home'

    return (
      <div className='App'>
        <Header/>
        <Nav pathname={path}/>
        <main>
              <Switch>
                <Route exact path='/' key='home' component={HomePage}/>

                <Route key='plants' path='/plants' component={PlantIndexPage}/>

                <Route key='calendar' path='/calendar' component={CalendarPage}/>

                <Route key='calendarNotes' path='/calendarNotes/:month/:day' component={CalendarNotes}/>

                <Route key='plantcard' path='/plantcard/:plantId' component={PlantCard}/>

                <Route key='account' path='/account' component={Account}/>
              </Switch>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
