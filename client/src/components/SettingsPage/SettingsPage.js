import React from 'react'

import MainHeader from '../MainHeader/MainHeader'
import Settings from '../Settings/Settings'

class SettingsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="SettingsPage container-fluid">
                    <MainHeader />
                    <Settings />
            </div>
        )
    }
}

export default SettingsPage