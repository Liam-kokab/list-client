import React from 'react';
import config from '../config.js';

class Menu extends React.Component {

    render() {

        let i=0;
        const viewLists = this.props.lists.map(list => {
           return(
               <div className={config.className.element} key={i + " " + list.name}>
                   {(this.getListDone(list))?
                       <img src={config.icons.done} alt={"L"} />:
                       <img src={config.icons.notDone} alt={"L"}
                            />
                   }
                   <span>{list.name}</span>

                   <img src={config.icons.openList} alt={i++ + "OpenList"}
                        onClick={this.props.handelChangeList}/>

               </div>

           )
        });



        return (
            <div className={config.className.listViewer}>
                {viewLists}
            </div>
        );
    }

    getListDone(list){

        console.log(list.name);
        for(let elem of list.elements){
            console.log(elem);
            if(!elem.done) return false;
        }
        return true;
    }

}

export default Menu;
