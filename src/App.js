import React from 'react';
import config from './config.js';
import tempLists from './tempLists.js';

import Header from './components/Header';
import Menu from './components/Menu';
import List from './components/List';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            menuIsOpen: false,
            currentListIndex: 0,
        };

        this.handelMenuOpenClose = this.handelMenuOpenClose.bind(this);
    }


    handelMenuOpenClose(event){
        const {alt} = event.target;
        const setTo = (alt === "Open");
        this.setState({'menuIsOpen': setTo});

    }


    render() {

        return (
            <div>
                <Header
                    topText = {(this.state.menuIsOpen)?
                        config.getPhrase("menu"): this.getList().name}
                    menuIsOpen = {this.state.menuIsOpen}
                    menuEvent = {this.handelMenuOpenClose}
                />

                {(this.state.menuIsOpen)?
                    <Menu

                    />:
                    <List
                        list = {this.getList()}

                    />


                }



            </div>
        );
    }

    getList(){
        return tempLists[this.state.currentListIndex];
    }

}

export default App;
