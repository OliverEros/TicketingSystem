import React from 'react'
import axios from 'axios'




class CreateGroupForm extends React.Component{
    constructor(){
        super();
        this.state = {
            groupName : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.setGroupName = this.setGroupName.bind(this)
       

    }


    

    handleSubmit(e){
        e.preventDefault()

        const payload = {
            groupName : this.state.groupName
        }
       
            axios.post('http://localhost:3000/createGroup',payload, {withCredentials : true})
            .then((status) => {
                if(status.status == 200){
                    this.props.history.push('/')
                }
            })
            .catch((err) => {console.log(err)})
        
       
    }

    setGroupName(e){
        this.setState({ [e.target.id] : e.target.value})
    }

    render(){
        return(
            <div className="createGroup">
                <form>
                    <label>Group name: </label>
                    <input type="text" id="groupName" value = {this.state.groupName} onChange={this.setGroupName}></input>
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateGroupForm