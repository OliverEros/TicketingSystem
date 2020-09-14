import React, {useState} from 'react';
import axios from 'axios';


function RegistrationForm(props){
    const [state, setState] = useState({
        email : "",
        username : "",
        password : "",
    })

    const handleChange = (e) => {
        const { id , value} = e.target   
        setState( prevState =>
        ({
            ...prevState,
            [id] : value
        }))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email : state.email,
            username : state.username,
            password : state.password
        }

        console.log(payload)
    //     axios.post("http://localhost:3000/register", payload)
    //     .then((status) => {
    //         if(status.status === 200) console.log("User has been added")
    //     })
    //     .catch((error) => console.log(error))
    // }
    }

   return(
       //Observation : Keep all styling in one curly bracket,
       //otherwise the previous will be overwritten 
       
       <div class="card" style={{marginTop : 1 + 'em', padding : 1 + 'em'}}>
        <form class="form-horizontal justify-content-center" /**TODO **/ > 
            <div class="form-group">
            <label>Email:</label>
            <input type="email" id="email" value={state.email} class="form-control" onChange={handleChange  } />
            </div>

            <div class="form-group">
            <label>Username:</label>
            <input class="form-control" value={state.username} id="username"  onChange={handleChange} />
            </div>
            

            <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" value={state.password} id="password" onChange={handleChange}/>
            </div>

           

            <button class="btn btn-primary" onClick={handleSubmit}>Register</button>
        
        </form>
        </div>
   )

}

export default RegistrationForm;