import React from 'react'
import axios from 'axios'

import MainHeader from '../MainHeader/MainHeader';
import TicketAnalysis from '../TicketAnalysis/TicketAnalysis';

import './HomePage.css'

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            groups : [], //holds groups the user is joined to
            selectedGroup : '' // Only one group is shown on the HomePage (selected group)
        }
    }

    //Fetch group data
    componentDidMount(){
      
    }

    render(){
        return(
            <div className = 'HomePage'>
                    <MainHeader />
                    <div className='container-sm-12'>
                    <TicketAnalysis />
                </div>
              
            </div>
        )
    }
}

export default HomePage