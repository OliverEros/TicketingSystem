import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';


function Main() {
    return(
       <div className="Main">
           <Switch>
            <Route  exact path='/' component={LoginForm}/>
            <Route  path='/register' component={RegistrationForm}/>
            <Route  path='/login' component={LoginForm} />
            </Switch>
            </div>
    );
}

export default Main;