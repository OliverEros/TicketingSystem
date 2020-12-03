import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

//Route used to check if the user is logged in
class ProtectedRoute extends React.Component{
    constructor(props){
        super(props)
       this.state = {
            isLoggedIn : false
        }
    }
    
 
   
    render(){
  
    
        const Component = this.props.component
       
        return this.state.isLoggedIn ? (<Component />) : (<Redirect to= {{pathname : '/login'}} />) 
    }
}

export default ProtectedRoute;