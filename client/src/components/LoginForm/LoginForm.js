import React, {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
//For redirecting
import { useHistory, Link} from 'react-router-dom';
import './LoginForm.css';
//Using this, session will store passport.js credentials
axios.defaults.withCredentials = true;



function LoginForm(props){
    //Used to redirect user after succesfull login
    let history = useHistory();
    //Used to assign values while the user is entering their details
    const [state, setState] = useState({
        password : '',
        username : ''
    })

    //Updates values
   const handleChange = (e) => {
        const {id, value} = e.target;
        setState(prevState => 
            ({
            ...prevState,
            [id] : value
        }))
    } 

    //For the login button. The variables "username" and "password"
    //are loaded into the const "payload", which then will get submitted to the backend
    //by Axios. If successful, the back-end replies with status 200, and then the front-end 
    //redirects to "/home" ( which is defined in app.js as a Route) using {useHistory}.

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(state.username && state.password.length){
            const payLoad = {
                username : state.username,
                password : state.password
            }
           try {
              await axios.post('http://localhost:3000/login', payLoad, {withCredentials : true})
               .then((response) => {
                    if(response.status === 200) {
                        history.push('/home')
                    }
               })
           } catch (error) {
               console.log(error)
           }

       
        }
            
    }

    return(
        <div>
            <Header />
        <div className="container-col-12 d-flex align-items-center flex-column ">
        <div className="card" style={{marginTop : 1 + 'em', padding : 1 + 'em'}}>
            <h3>Login: </h3>
        <form className="form-horizontal justify-content-center"> 
            <div className="form-group">
            <label>Username:</label>
            <input className="form-control"  id="username" value={undefined}  onChange={handleChange}/>
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={undefined}  id="password" onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </form>
        <Link to="/forgotPassword" id="forgotpassword">Forgot Password?</Link>
        </div>
        </div>
        </div>
    )
}

export default LoginForm;