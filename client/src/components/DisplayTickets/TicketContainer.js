import React from 'react'
import axios from 'axios'
import './TicketContainer.css'
import TicketCards from '../IndTickets/IndTickets'

import {useHistory} from 'react-router-dom'



/**
 * [LOGIC]
 * [+] The user is shown tickets based on different conditions:
 *      [*] All, pending, resolved, and by group
 * [+] To decide which to shown, we use state flags which can be set from the filter component
 * [+] Once set, we change the required flag to TRUE and the rest FALSE
 * [+] The controller checks the condition and based on that renders the results
 * [+] To load more, the user clicks the button and the data re-rendered (shouldComponentUpdate possibily)
 */


class TicketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Keeps track of which index the database should start
            // loading tickets from
            at: 0,
            end: 4,
            tickets: [],
            sortedCards: [],


            alltickets : true,
            pendingTickets : false,
            resolvedTickets : false,
            groupTickets : false,  

            groupToSort : '',
        }

        this.renderAllCards = this.renderAllCards.bind(this);
        this.renderPendingCards = this.renderPendingCards.bind(this);
        this.showButton = this.showButton.bind(this);
        this.resultController = this.resultController.bind(this)
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
     *  Data is passed from the filter component
     *  Decides which tickets will be shown
     */
    resultController() {

        const whichTickets = this.props.whichCards
        
        switch(whichTickets){
            case 'all':
                this.setState({alltickets : true, pendingTickets : false, resolvedTickets : false , groupTickets : false})
                break;
            case 'pending':
                this.setState({alltickets : false, pendingTickets : true, resolvedTickets : false , groupTickets : false})
                break
            case 'resolved':
                this.setState({alltickets : false, pendingTickets : false, resolvedTickets : true , groupTickets : false})
                break;
            case 'group':
                break;
        }
    }

    /**
     *  Renders the required tickets
     */
    whichTickets(){
        const state = this.state

        if(state.alltickets === true) {
          return  this.renderAllCards()
           
        } 
        else if(state.pendingTickets === true){
          return  this.renderPendingCards()
    
        }
        else if(state.resolvedTickets === true){
         return  this.renderResolvedCards()
        }
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

   
    /**
     * Only renders cards with pending status
     */
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

     /**
      *  Only show button if there are tickets to load
      */
     showButton = () => {
        if (this.state.end < this.state.tickets.length) {
            return <button onClick={this.loadMore}>Show More</button>
        }
    }

     /**
     *  Logic to load more tickets
     */
    loadMore = () => {
        this.setState({ end: this.state.end + 6 }, () => {
            this.whichTickets()
        
        })
    }




    render() {

        if(this.state.tickets.length > 0 ){
            return (
                <div >
                    <button onClick=  {() => this.resultController()}>resultController</button>
                    <div className='row ticketcontainer md-4'>
                        {this.whichTickets()}
                    
                    </div>
                    <div id="buttoncontainer">
                            {this.showButton()}
                    </div>
                </div>
    
            );
        } else {
            return(
                <div className = "col sm-9">
                    <h3>There are no tickets to show</h3>
            </div>
            )
            
        }
        
    }
}

export default TicketContainer;