import React, { Component } from 'react';

class ListNames extends Component {
    constructor(){ // list names does *not* accept props
        super();
        this.state = {
            names: ["Dean", "Adrien", "Sarah", "Chandra"]
        }
        
        //need to bind the event handler to the component
         this.handleListItemAdd = this.handleListItemAdd.bind(this);
    }

    handleListItemAdd(){
        this.setState(function(prevState){ //to set state of object, in this case add new item
            let newArray = prevState.names;
            newArray.push("New Item");
            return {names: newArray};
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => {
                        return (
                            <li key={index} >{name}</li>
                        );
                    })}
                </ul>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.handleListItemAdd}>Add List Item</button>
            </div>
        );
    }
}

export default ListNames;