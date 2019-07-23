import React from 'react';
import config from '../config.js';
import '../css/listAndElement.css';

class Element extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            extended: props.extended,
        }
    }



    render() {



        return (
            <div className={config.className.element}>
                {(this.props.done)?
                    <img src={config.icons.done} alt="Done"/> :
                    <img src={config.icons.notDone} alt="notDone" />
                }

                <span
                    id = {this.props.name}
                    onClick={this.props.handelExtend}
                >{this.props.name}</span>
                <p
                    style={{display: this.props.extended ? 'block' : 'none' }}
                >{this.props.detail}</p>



            </div>
        );
    }
}

export default Element;
