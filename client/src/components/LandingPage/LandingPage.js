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
        <div>
        <div className="container-col-12 ">
        <div className='box'>
            <button value="log" onClick = {onClick} >Login</button>
            <button value="reg"  onClick={onClick} >Register</button>
            
        </div>
        </div>
        </div>
        
        

    )

}

export default LandingPage