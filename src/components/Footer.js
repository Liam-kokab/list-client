import React from 'react';
import config from './config.js';

class Footer extends React.Component {

    render() {

        return (
            <div>
                <img
                    src={config.icons.plus}
                    alt="Add"
                />
            </div>
        );
    }
}

export default Footer;
