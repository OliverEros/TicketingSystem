import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import {Switch, Route} from 'react-router-dom';
import RegistrationForm from './components/Router/mainRouter';
import MainPage from './components/MainPage/MainPage';
import TicketForm from './components/SubmitTicket/TicketForm';
import TicketCards from './components/IndTickets/IndTickets';
import TicketContainer from './components/DisplayTickets/TicketContainer';


function App() {
  return (
    <div className="App">
     
        <Switch>
            <Route path = '/submitTicket' component={TicketForm}/>
            <Route  exact path='/register' component={RegistrationForm}/>
            <Route  exact path='/login' component={LoginForm} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/tickets" render = {(props) => (<TicketCards user = 'Tom'
                                                                            title = 'problem'
                                                                            body = 'asdasd'
                                                                            status = 'resolved'
                                                                            {...props} />)} />
            <Route exact path="/loadTickets" component = {TicketContainer} />                                           
        </Switch>
       </div>
  );
}

export default App;
