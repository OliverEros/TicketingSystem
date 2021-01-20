import React from 'react'
import './Settings.css'
import axios from 'axios'

import Popup from 'reactjs-popup'
import FlexibleTicket from '../FlexibleTicket/FlexibleTicket'



class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            groups: [1,2,3],
            email: '',

            newUsername : '',
            newEmail : '',
            newPassword : ''
        }
        this.loadGroups = this.loadGroups.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3000/loadUserData', {withCredentials : true})
        .then((response) => {
            console.log(response.data)
            this.setState({
                username : response.data.username,
                groups : response.data.joinedGroups,
                email : response.data.email
            })
        })
    }

    loadGroups() {
        const groups = this.state.groups.map(group => {
            return (
                <ul className="groups list-group" id='groupMembers'>
                    <li className="list-group-item align-items-right">{group}<a href='#'><span style={{ float: 'right' }} onClick={() => this.setState({ open: !this.state.open })}>Leave</span></a> </li>
                </ul>
            )
        })
        return groups
    }

    getValue(e){

    }








    render() {
        return (

            <div className='Settings'>
                <div className='row'>
                    <div className='userSettings col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <form onSubmit>
                            <h4><b>Edit your profile</b></h4>
                            <div className='form-group'>
                                <label for='username'>Username</label>
                                <input className="form-control input-lg" type='text' defaultValue={this.state.username} placeholder='Username' id='username'></input>
                            </div>
                            <div className='form-group'>
                                <label for='email'>Email</label>
                                <input className="form-control" type='email' defaultValue={this.state.email} placeholder='Email' id='email'></input>
                            </div>
                            <div>
                                <button type='reset' className='cancel'>Cancel</button>
                                <button type="submit" className="submit">Submit</button>
                            </div>
                        </form>
                        
                            <form>

                           
                            <button class="btn btn-primary" id='changePassword' type="button" data-toggle="collapse" data-target="#collapseExample">
                                Change Password
                             </button>

                            <div class="collapse" id="collapseExample">
                            <div className='form-group'>
                                <label for='passwrd'>Password</label>
                                <input className="form-control" type='password' id='passwrd' autoComplete='off'></input>
                            </div>
                            <div className='form-group'>
                                <label for='passwrd'>Password</label>
                                <input className="form-control" type='password' id='confirmPasswrd' autoComplete='off'></input>
                                <button id='submitNewPassword'>Submit</button>
                            </div>
                            </div>
                            </form>
                           




                          
                      

                    </div>
                </div>
                <hr style={{ maxWidth: '500px' }} />

                <div className='row'>

                    <div className='col-12 col-xs-12 col-sm-12 col-md-12'>
                        <div className='labelContainer'>
                            <h4><b>Your groups</b></h4>
                            {this.loadGroups()}
                            {
                                this.state.open ? <FlexibleTicket /> : <h3>dsffd</h3>
                            }
                        </div>



                    </div>
                </div>

            </div>

        )
    }
}

export default Settings
