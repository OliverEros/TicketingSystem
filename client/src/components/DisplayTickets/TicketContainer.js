import axios from 'axios'
import React from 'react'
import './TicketContainer.css'




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
            //Keeps track of which filter is being used (all, pending, or resolved)
            currentTicket: '',
            numberofPages: 0,
            atPage: 1,
            tickets: []
        }

        this.ALL = { resolved: undefined, department: 'sd', atPage: this.state.atPage }
        this.PENDING = { resolved: false, department: 'sd', atPage: this.state.atPage }
        this.RESOLVED = { resolved: true, department: 'sd', atPage: this.state.atPage }

        this.fetchTickets = this.fetchTickets.bind(this);
        this.returnTickets = this.returnTickets.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    fetchTickets = (query) => {
        axios.get('http://localhost:3000/loadTickets', { withCredentials: true, params: query })
            .then(data => {
                this.setState(() => {
                    return {
                        currentFilter: query,
                        tickets: data.data.data,
                        numberofPages: data.data.pages
                    }
                })
                console.log(this.state.currentTicket)
            })
            .catch(err => { console.log(err) })
    }

    componentDidMount() {
        this.fetchTickets(this.ALL)
    }

    /**
     * Returns tickets based on the following parameters:
     * ->All
     * ->Pending
     * ->Resolved
     */
    returnTickets() {
        if (this.state.tickets.length == 0) {
            return (<h5>No tickets to load</h5>)
        } else {
            return (this.state.tickets.map(ticket => {
                let status;
                if (ticket.resolved) {
                    status = 'Resolved'
                } else {
                    status = 'Pending'
                }
                return (<li id='liTickets' className='list-group-item'>{ticket.title} <span class="badge badge-primary badge-pill" style={{ float: "right" }}>{status}</span></li>)
            }))
        }
    }
    /**
     * Creates pages for pagination
     */
    returnPages() {
        let _pageArray = []
        //create a temporary array
        if (this.state.numberofPages == 0) {
            return (<div></div>)
        } else {
            for (let i = 1; i <= this.state.numberofPages; i++) {
                _pageArray.push(<li class="page-item" onClick={(element) => this.changePage(element.target.id)}><a class="page-link" id={i} href="#">{i}</a></li>)
            }
            return (_pageArray.map(item => { return item }))
        }
    }

    //Changes page for pagination
    changePage(element) {
        //create a copy of the currently saved filter
        let filter = { ...this.state.currentFilter }
        //Each page number has a value that is saved in the form of id. This value is passed to the fetchTicket function
        // Tickets to load: [page = x, number of tickets = 10] => skip(page-1).limit(10)
        filter['atPage'] = element
        this.fetchTickets(filter)
    }


    render() {
        return (
            <div className='TicketContainer'>
                <div className='row'>
                    <div className='tabs col-sm-12'>
                        <button id='allTickets' className='btn btn-primary btn-sm' onClick={() => this.fetchTickets(this.ALL)}>All</button>
                        <button id='pendingTickets' className='btn btn-primary btn-sm' onClick={() => this.fetchTickets(this.PENDING)}>Pending</button>
                        <button id='resolvedTickets' className='btn btn-primary btn-sm' onClick={() => this.fetchTickets(this.RESOLVED)}>Resolved</button>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-md-12 '>
                        <div className='ticketList'>
                            <ul id='ulTickets' className='list-group'>
                                {this.returnTickets()}
                            </ul>

                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div id='paginationContainer'>
                            <ul className='pagination justify-content-center'>
                                {this.returnPages()}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

        )
    }



}

export default TicketContainer;