import React, { useState } from 'react';
import './ForgotPassword.css';
import axios from 'axios';

export default function ForgotPassword(){
    //Default error message
    const defaultError = {
        _email : {stat : false, message : 'You must enter your email address!'},
        _noAt : {stat : false, message : 'Email must contain \'@\''},
    }

    const [email, setEmail] = useState("")
    const [inputError, setError] = useState(defaultError)

    function submitEmail(e){
        e.preventDefault()
        if(email.length == 0){
            setError({_email : {stat : true, message : 'You must enter your email address!'}});
            return;
        }
        else if(!email.toString().includes('@')){
            setError({_noAt : {stat : true,  message : 'Email must contain \'@\''}});
            return;
        }

        axios.post('http://localhost:3000/forgotPassword', {email : email})
        .then((response) => {
            

        })
        .catch(err => {
            /**
             * Handle server response by displaying the custom message
             *  "Email could not be found" / "There was error"
             */
            if(err.response.data && err.response.status == 400){

                setError({_email : {stat : true, message : err.response.data['message']}});
            }
        })
    }

    function _wrongInput(){
        if(inputError['_email']['stat']){
            return(<h3 id='errorBlock'>{inputError['_email']['message']}</h3>)
        }
        else if(inputError['_noAt']['stat']){
             return(<h3 id='errorBlock'>{inputError['_noAt']['message']}</h3>)
            }
    }


    return(
        <div className='row'>
            <div className=' outerDiv col-md-12 col-sm-12'>
                <div className='forgotPasswordDiv'>
                    <form id='forgottenForm' onSubmit={e => submitEmail(e)}>
                        {_wrongInput()}
                        <h5>Enter your email</h5>
                        <input type='email' id='enterEmail' placeholder='Enter your email' value={email} onChange = {e => {setEmail(e.target.value); setError(defaultError) }}></input>
                        <button type='submit' id='submitEmail'>Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    )

}

