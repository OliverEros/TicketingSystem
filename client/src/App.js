import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import {Switch, Route} from 'react-router-dom';
import RegistrationForm from './components/Router/mainRouter';
import MainPage from './components/MainPage/MainPage';
import TicketForm from './components/SubmitTicket/TicketForm';


function App() {
  return (
    <div className="App">
     
        <Switch>
            <Route path = '/submitTicket' component={TicketForm}/>
            <Route  exact path='/register' component={RegistrationForm}/>
            <Route  exact path='/login' component={LoginForm} />
            <Route exact path="/home" component={MainPage} />
        </Switch>
       </div>
  );
}

export default App;
