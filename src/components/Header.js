import React from 'react';
import '../css/header.css';

import config from '../config.js';

class Header extends React.Component {
    topText;
    menuEvent;

    render() {
        return (
            <div className={config.className.header}>
                {(this.props.menuIsOpen)?
                    <img
                        alt="Close"
                        src={ config.icons.closeMenu }
                        onClick={this.props.menuEvent}
                    /> :
                    <img
                        alt="Open"
                        src={ config.icons.openMenu }
                        onClick={this.props.menuEvent}
                    />
                }


                <p className="headerText">{this.props.topText}</p>

            </div>
        );
    }
}

export default Header;
