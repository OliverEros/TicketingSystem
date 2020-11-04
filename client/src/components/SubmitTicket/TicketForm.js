import React from 'react';
import axios from 'axios'
import './ticketform.css';
import Axios from 'axios';

class TicketForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            department: '',
            description: '',
        }
        this.setStateVariable = this.setStateVariable.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    setStateVariable(event) {
        this.setState({ [event.target.id]: event.target.value })

    }

    handleSubmit(e) {
        e.preventDefault()
        const payload = this.state

        if (!(payload.department.length < 1 || payload.title.length < 1 || payload.description.length < 1)) {
            axios.post('http://localhost:3000/submitTicket', payload)
                .then((status) => {
                    if (status.status == 200) {
                        console.log('Saved')
                    }
                })
                .catch((err) => { console.log(err) })

            console.log(payload)

        }
    }

    render() {
        return (

            <form className="TicketForm">
                <div className="container">
                    <h1>Submit Ticket</h1>
                    <hr></hr>
                    <label for="dep">Department:</label>
                    <input value={this.state.department} onChange={this.setStateVariable} id="department" ></input>

                    <label for="">Problem Title:</label>
                    <input value={this.state.title} id="title" onChange={this.setStateVariable}></input>

                    <label>Description:</label>
                    <textarea cols="60" value={this.state.description} id="description" style={{ height: 100 }} onChange={this.setStateVariable}></textarea>
                    <button type="submit" id="description" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>

        );
    }
}

export default TicketForm;

