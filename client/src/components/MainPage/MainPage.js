import React from 'react';

//Components
import MainHeader from '../MainHeader/MainHeader';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
        }
    }

    render(){
        return(
            <div className = "MainPage">
                <MainHeader />

            </div>
        );
    }

}

export default MainPage;

