import React from 'react'
import './indTickets.css'

class TicketCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             
                <div className = "card ticket" style = {{backgroundColor : this.ticketStatus(this.props.status)}}>
                    <div className = "card-header">
                        <h5 className = "card-title">{this.props.title}</h5>
                    </div>
                    <div className = "card-body">
                        <h6 className = "card-subtitle mb-2 text-muted">{this.props.user}</h6>
                        <p className = "card-text">{this.props.body}</p>
                    </div>
                </div>
        )
    }

    ticketStatus = () => {
        const status = this.props.status
        if(status === false) {
            return 'yellow'
        } else if (status === true){
            return 'green'
        }

    }
}

export default TicketCards;