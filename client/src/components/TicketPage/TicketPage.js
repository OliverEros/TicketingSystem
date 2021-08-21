import React, { Fragment } from 'react';
import axios from 'axios';
import './TicketPage.css'

//Components
import MainHeader from '../MainHeader/MainHeader';
import TicketContainer from '../DisplayTickets/TicketContainer'




class TicketPage extends React.Component {
    constructor(props){
        super(props);
        //All data is loaded here and then passed to each
	//individiual compoment
	    this.state = {
            user : [],
            tickets : [],
            groups : [],
           
        }
    }

    componentDidMount() {
    }


    render(){
        return(
            <div className = "MainPage">
                <MainHeader />
                <div className='container-fluid'>

                <TicketContainer />
                </div>
            </div>
        );
    }

}

export default TicketPage;

