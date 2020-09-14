import React, {useState} from 'react';
import axios from 'axios';


function LoginForm(props){
    const [state, setState] = useState({
        password : '',
        username : ''
    })

   const handleChange = (e) => {
        const {id, value} = e.target;
        setState(prevState => 
            ({
            ...prevState,
            [id] : value
        }))
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.username && state.password.length){
            const payLoad = {
                username : state.username,
                password : state.password
            }
        axios.post("http://localhost:3000/login", payLoad)
        .then((status) => {
            if(status === 200) console.log("Logged in!")
        })
        .catch((error) => {
            console.log(error);
         })
        }else {
            console.log(state)
        }
        
    }

    return(
        <div className="card" style={{marginTop : 1 + 'em', padding : 1 + 'em'}}>
            <h3 style={{paddingBottomg: 1 + 'em'}}>{state.username}</h3>
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
        </div>
    )
}

export default LoginForm;