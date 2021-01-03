import React from 'react'
import './Settings.css'
import axios from 'axios'


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            groups: ['1','2']
        }
    }





    loadGroups(){
       const groups = this.state.groups.map(group => {
            return(
                <ul className="groups list-group" id='groupMembers'>
                    <li className="list-group-item align-items-right">{group}<a href='#'><span className='leave' onClick={() => console.log('e')}>Leave</span></a> </li>
                </ul>
            )
        })
        return groups
    }






    render() {
        return (

            <div className='Settings'>
                <div className='row'>
                    <div className='col-12 col-xs-12 col-sm-12 col-md-12'>
                        <div className='prettyBackground'>

                            <div className='userSettings '>
                                <h4><b>Edit your profile</b></h4>
                                <form>
                                    <div className='form-group'>
                                        <label for='username'>Username</label>
                                        <input className="form-control" type='text' placeholder='Username' id='username'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='email'>Email</label>
                                        <input className="form-control" type='email' placeholder='Email' id='email'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='passwrd'>Password</label>
                                        <input type='password' id='passwrd' autoComplete='off'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='passwrd'>Password</label>
                                        <input type='password' id='confirmPasswrd' autoComplete='off'></input>
                                    </div>
                                   
                                        <button type='reset' className='cancel'>Cancel</button>
                                        <button type="submit" className="submit">Submit</button>
                                    

                                </form>
                            </div>
                        </div>
                    </div>




                </div>
                <hr></hr>
                <div className='row'>
                    <div className=' col-12 col-xs-12 col-sm-12 col-md-12'>
                        <div className='labelContainer'>
                            <h4><b>Your groups</b></h4>
                            {this.loadGroups()}
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default Settings
