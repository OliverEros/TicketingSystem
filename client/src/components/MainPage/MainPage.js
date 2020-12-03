import React, { Fragment } from 'react';
import axios from 'axios';

//Components
import MainHeader from '../MainHeader/MainHeader';
import TicketContainer from '../DisplayTickets/TicketContainer'
import FilterBar from '../FilterBar/FilterBar';


class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : [],
            tickets : [],
            groups : [],

            whichTickets : ''
           

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/loadUserData', {withCredentials: true})
        .then((userData) => {
            this.setState({user : userData.data, 
                        tickets : userData.data.tickets,
                    groups : userData.data.joinedGroups})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    filter(f){
        this.setState({whichTickets : f})
    }
    
    

    render(){
        return(
            <div className = "MainPage">
                <MainHeader />
                <div className="row">
                <FilterBar groups = {this.state.groups} />
                <TicketContainer />
                </div>
            </div>
        );
    }

}

export default MainPage;

