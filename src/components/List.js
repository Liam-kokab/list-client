import React from 'react';
import config from '../config.js';
import '../css/listAndElement.css';

import Element from "./Element";


class List extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            list : this.props.list.elements
        };

        this.handelExtend = this.handelExtend.bind(this);
    }


    handelExtend(event){
        const {id} = event.target;
        this.setState(prevState => {
            const list = prevState.list.map(elem => {
               if(elem.name === id) elem.extended = !elem.extended;
               else elem.extended = false;
               return elem;
            });
            return {
                list
            }
        });

    }

    render() {
        const elements = this.state.list.map( elem =>
           <Element
               name= {elem.name}
               done= {elem.done}
               detail = {elem.detail}
               key = {elem.name}
               extended = {elem.extended}
               cratedBy = {elem.cratedBy}
               doneBy = {elem.doneBy}
               handelExtend = {this.handelExtend}

               //handleClick
           />
        );


        return (
            <div className={config.className.listViewer}>
                {elements}
            </div>
        );
    }
}

export default List;
