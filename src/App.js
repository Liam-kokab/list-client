import React from 'react';
import config from './config.js';
import tempLists from './tempLists.js';

import Header from './components/Header';
import Footer from './components/Footer'
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
        this.handelChangeList = this.handelChangeList.bind(this);
    }

    handelMenuOpenClose(event){
        const {alt} = event.target;
        const setTo = (alt === "Open");
        this.setState({'menuIsOpen': setTo});

    }

    handelChangeList(event){
        const {alt} = event.target;
        this.setState({"currentListIndex": parseInt(alt, 10),
            "menuIsOpen": false});
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
                        lists = {tempLists}
                        handelChangeList = {this.handelChangeList}
                    />:
                    <List list = {this.getList()} />
                }

                <Footer />

            </div>
        );
    }

    getList(){
        return tempLists[this.state.currentListIndex];
    }

}

export default App;
