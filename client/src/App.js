import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/Router/mainRouter';
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import TicketAnalysis from './components/TicketAnalysis/TicketAnalysis';
import SettingsPage from './components/SettingsPage/SettingsPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import TicketPage from './components/TicketPage/TicketPage';




function App() {
  return (
    <div className="App"> 
        <Switch>
            <Route exact path = '/' component={LandingPage}/>	
            <Route  exact path='/register' component={RegistrationForm}/>
            <Route  exact path='/login' component={LoginForm} />
            <Route exact path="/home" component={HomePage} />
            <ProtectedRoute  path="/tickets" component = {TicketPage} />
            <Route path="/graph" component = {TicketAnalysis} />  
            <ProtectedRoute  exact path='/settings' component = {SettingsPage}/>
            <Route path='/forgotPassword' component={ForgotPassword} />
        </Switch>
       </div>
  );
}

export default App;
