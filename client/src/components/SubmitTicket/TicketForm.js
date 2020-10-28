import React from 'react';
import './ticketform.css';

class TicketForm extends React.Component {
    constructor(){
        super();

        this.state = {
            createdBy :'',
            title : '',
            created : Date.now,
            department : '',
            description : '',
        }
    }

    setStateVariable(e) {
        
    }

    render(){
        return(
            <div>
                    <form className="TicketForm">
                    <label for = "dep">Department:</label>
                    <input value = {this.state.department} onChange = {this.onChange} id="dep" ></input>

                    <label for="">Problem Title:</label>
                    <input value = {this.state.title} id="problemtitle"></input>

                    <label>Description:</label>
                    <input value = {this.state.description} for="description" style = {{height: 100}}></input>
                    <button type="submit" id = "description">Submit</button>
                    </form>
                </div>

        );
    }
}

export default TicketForm;

