import React from 'react';
import config from '../config.js';

class Menu extends React.Component {

    render() {

        let i=0;
        const viewLists = this.props.lists.map(list => {
           return(
               <div className={config.className.element} key={i + " " + list.name}>
                   {(i === this.props.currentListIndex)?
                       <img src={config.icons.done} alt={(i++) + "L"} />:
                       <img src={config.icons.notDone} alt={i++ + "L"}
                            onClick={this.props.handelChangeList}/>
                   }

                   <span>{list.name}</span>

               </div>
           )
        });



        return (
            <div className={config.className.listViewer}>
                {viewLists}
            </div>
        );
    }
}

export default Menu;
