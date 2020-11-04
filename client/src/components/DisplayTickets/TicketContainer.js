import Axios from 'axios';
import React from 'react'
import axios from 'axios'

import TicketCards from '../IndTickets/IndTickets'

class TicketContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Keeps track of which index the database should start
            // loading tickets from
            at : 0,
            end : 4,
            tickets : []
        }

        this.renderCards = this.renderCards.bind(this);
    }


    componentDidMount(){
        let loadedTickets = []
         axios.get('http://localhost:3000/loadTickets')
        .then((result) => {
            result.data.forEach(element => {
                loadedTickets.push(element) 
            })
            return loadedTickets;
        })
        .then((arrayToCopy) => {
            this.setState({tickets : [...this.state.tickets, ...arrayToCopy]})
        })
        .catch((err) => {console.log(err)})
    }

    /**
     * Displays a given amount of tickets
     * 
     */

    renderCards() {
        let ticketsToDisplay = this.state.tickets.slice(this.state.at, this.state.end)

       let shownCards =  ticketsToDisplay.map(ticket => {
            return(
                <div className="col">
                    <TicketCards title = {ticket.title}/>
                </div>
            )
        })

        return shownCards

    }

    /**
     * Updates the amount of tickets that should be shown
     * by calling the renderCards function
     */

    loadMore = () => {
        this.setState({end : this.state.end + 6})
        this.renderCards()

    }

    

    render(){
        return(
            <div className = 'TicketContainer'>
                <div className = 'container'>
                    <div className = 'row'>
                        {this.renderCards()}
                    </div>
                </div>
                <button style={{width : '20%', margin : '5px'}} onClick = {this.loadMore}>Show More</button>
            </div>
        );
    }
}

export default TicketContainer;