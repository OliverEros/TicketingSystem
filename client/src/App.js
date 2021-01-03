import React from 'react';
import './App.css';


import LoginForm from './components/LoginForm/LoginForm';
import {Switch, Route} from 'react-router-dom';
import RegistrationForm from './components/Router/mainRouter';
import HomePage from './components/HomePage/HomePage';
import TicketForm from './components/SubmitTicket/TicketForm';
import LandingPage from './components/LandingPage/LandingPage';
import GroupUserList from './components/GroupUserList/GroupUserList';
import CreateGroupForm from './components/CreateGroupForm/CreateGroupForm';
import TicketAnalysis from './components/TicketAnalysis/TicketAnalysis';
import SettingsPage from './components/SettingsPage/SettingsPage';
import MainPage from './components/MainPage/MainPage';




function App() {
  return (
    <div className="App">
     
        <Switch>
            <Route exact path = '/' component={LandingPage}/>	
            <Route path = '/submitTicket' component={TicketForm}/>
            <Route  exact path='/register' component={RegistrationForm}/>
            <Route  exact path='/login' component={LoginForm} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/loadTickets" component = {MainPage} />
            <Route exact path="/createGroup" component = {CreateGroupForm} />   
            <Route exact path="/listmembers" component = {GroupUserList} />    
            <Route exact path="/graph" component = {TicketAnalysis} />  
            <Route exact path='/settings' component = {SettingsPage} />  
            
        </Switch>
       </div>
  );
}

export default App;
