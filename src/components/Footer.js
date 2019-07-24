import React from 'react';
import '../css/headerAndFooter.css';

import config from '../config.js';

class Footer extends React.Component {

    render() {

        return (
            <div className="footer">
                <img
                    src={config.icons.plus}
                    alt="Add"
                />
            </div>
        );
    }
}

export default Footer;
