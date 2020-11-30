import React from 'react'
import {useHistory} from 'react-router-dom'


import './LandingPage.css'

function LandingPage(){
    const history = useHistory()

    function onClick(e) {
        if(e.target.value == 'log' ){
        history.push('/login')
        }
        if(e.target.value == 'reg'){
            history.push('/register')
        }
    }



    return(
    <div className="LandingPage">
        <div className="loginContainer">
            <button value="log" onClick = {onClick}>Login</button>
        </div>
        <div className = "registerContainer">
            <button value="reg"  onClick={onClick}>Register</button>
        </div>
    </div>
    )

}

export default LandingPage