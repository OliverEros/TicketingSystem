import React from 'react'
import { render } from '../../../../server/app';

class createGroupForm extends React.Component{
    constructor(){
        super();
        this.state = {
            groupName = '',
            groupAdmin = ''
        }
    }

    render(){
        return(
            <div className="createGroup">
                <form>
                    <label>Group name: </label>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}