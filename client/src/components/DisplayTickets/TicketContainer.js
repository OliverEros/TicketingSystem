import React from 'react'
import axios from 'axios'
import './TicketContainer.css'
import TicketCards from '../IndTickets/IndTickets'


class TicketContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Keeps track of which index the database should start
            // loading tickets from
            at: 0,
            end: 4,
            tickets: [],
            whichCards: [],

            boolean : false,

            alltickets : true,
            pendingTickets : false,
            resolvedTickets : false,
            groupTickets : false,  

            groupToSort : '',
        }

        this.renderAllCards = this.renderAllCards.bind(this);
        this.renderPendingCards = this.renderPendingCards.bind(this);
        this.showButton = this.showButton.bind(this);
        this.test = this.test.bind(this)
    }


    componentDidMount() {
        let loadedTickets = []
        axios.get('http://localhost:3000/loadTickets')
            .then((result) => {
                result.data.forEach(element => {
                    loadedTickets.push(element)
                })
                return loadedTickets;
            })
            .then((arrayToCopy) => {
                this.setState({ tickets: [...this.state.tickets, ...arrayToCopy] })
            })
            .catch((err) => { console.log(err) })
    }

     /**
     * Displays a given amount of tickets
     * 
     */
    renderAllCards() {
        
        const tickets = this.state.tickets.slice(this.state.at, this.state.end)

        return tickets.map(ticket => {
            return (
                <div className="col-xs-4">
                    <TicketCards title={ticket.title} user={ticket.createdBy} body={ticket.description} status={ticket.resolved} />
                </div>
            )
        })
        
    }

    //Only renders cards with pending status
    renderPendingCards(){
        const pendingCards = []

        this.state.tickets.forEach(card => {
            if (card.resolved == false){
                pendingCards.push(card)
            }        
        });

        let nbmrOfCards = pendingCards.slice(this.state.at, this.state.end)

       return nbmrOfCards.map(ticket => {
            return (
                
                <div className="col-xs-4">
                    <TicketCards title={ticket.title} user={ticket.createdBy} body={ticket.description} status={ticket.resolved} />
                </div>
            )
        })
    }

    

    test() {
        this.setState({alltickets : false, pendingTickets : true, resolvedTickets : true , groupTickets : true})
    }

   
   

    loadMore = () => {
        const state = this.state
        this.setState({ end: this.state.end + 6 })

        if(state.alltickets === true) {
            this.renderAllCards()
           
        } 
        else if(state.pendingTickets === true){
            this.renderPendingCards()
    
        }
        else if(state.resolvedTickets === true){
           this.renderResolvedCards()
        }
    }

     //Only show button if there are tickets to load
     showButton = () => {
        if (this.state.end < this.state.tickets.length) {
            return <button onClick={this.loadMore}>Show More</button>
        }
    }

    whichTickets(){
        if(this.state.alltickets == true) {
           return this.renderAllCards()
        } else if(this.state.pendingTickets == true){
            return this.renderPendingCards()
        }
    }




    render() {
        return (
            <div >
                <button onClick=  {() => this.test()}>TEST</button>
                <div className='row ticketcontainer mb-4'>
                    {this.whichTickets()}
                
                </div>
                <div id="buttoncontainer">
                        {this.showButton()}
                </div>
            </div>

        );
    }
}

export default TicketContainer;