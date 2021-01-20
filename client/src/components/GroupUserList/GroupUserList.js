import React from 'react'

class GroupUserList extends React.Component {
    // PROPS --> name of the group ==> pass it to axios ===> get data
    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }

    componentDidMount(){
        //get users 
    }

    getUsers(){
        const groupUsers = this.state.users.map(function(user){
            if(user && user.isAdmin){
            return(
                <li className="list-group-item d-flex">user.username<span className="badge badge-primary badge-pill">Admin</span></li>
            )
        } else {
            return(
                <li className="list-group-item d-flex">user.username<span className="badge badge-primary badge-pill">Member</span></li>
            )
        }
        })

        return groupUsers
    }


    render(){
        return(
            <div className="list-group">
                {this.getUsers}
            </div>
        )
    }
}

export default GroupUserList