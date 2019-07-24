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

                <span>{this.props.name}</span>
                <img
                    alt="show More"
                    src={config.icons.more}
                    id = {this.props.name}
                    onClick={this.props.handelExtend}
                />
                <div className=""
                    style={{display: this.props.extended ? 'block' : 'none' }}
                >{this.props.detail}
                    <p className="small">
                        <span >{config.getPhrase("createdBy")}{this.props.cratedBy}</span>
                        {(this.props.done)? <span style={{textAlign:"right"}}
                        >{config.getPhrase("doneBy")}{this.props.doneBy}</span> : "" }
                    </p>
                </div>
            </div>
        );
    }
}

export default Element;
