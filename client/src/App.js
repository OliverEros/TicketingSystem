import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import {Switch, Route} from 'react-router-dom';
import RegistrationForm from './components/Router/mainRouter';
import MainPage from './components/MainPage/MainPage';
import TicketForm from './components/SubmitTicket/TicketForm';
import TicketCards from './components/IndTickets/IndTickets';
import TicketContainer from './components/DisplayTickets/TicketContainer';
import LandingPage from './components/LandingPage/LandingPage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <div className="App">
     
        <Switch>
            <Route exact path = '/' component={LandingPage}/>
            <Route path = '/submitTicket' component={TicketForm}/>
            <Route  exact path='/register' component={RegistrationForm}/>
            <Route  exact path='/login' component={LoginForm} />
            <Route exact path="/tickets" component={MainPage} />
            <Route exact path="/loadTickets" component = {TicketContainer} />                                           
        </Switch>
       </div>
  );
}

export default App;
