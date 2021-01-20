import React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MainHeader.css';



class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
       
    }
    
    //TODO 
    logout(){
        axios.get('http://localhost:3000/logout',{withCredentials : true})
        

    }




    componentDidMount() {
        axios.get('http://localhost:3000/home', { withCredentials: true })
            .then((respond) => { this.setState({ user: respond.data }) }) //TODO
            .catch((err) => { console.log(err) })

    };

    render() {
        return (
            <div className='MainHeader row'>
            <nav className="navbar navbar-expand-xl navbar-dark bg-primary col-lg-12 col-md-12">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {/* Home */}
                        <li className="nav-item">
                            <Link to="/home" className="link">Home</Link>
                        </li>
                        {/* Tickets */}
                        <li className="nav-item">
                            <Link to="/tickets" className="link">Tickets</Link>
                        </li>
                        {/* Settings */}
                        <li className="nav-item">
                            <Link to="/settings" className="link">Settings</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto " id="secondNav">
                        <li className="nav-item">
                            <Link to="/logout" className="link" id="signOut" onClick={this.logout()}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        );

    }


}

export default MainHeader;
