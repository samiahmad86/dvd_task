import React, { Component } from 'react';
import './inStore.css';

class InStore extends Component {

    state= {
        slicedKey:50
    }

    deleteItem = (item) => {
        this.props.deleteItem(item.target.parentElement.id);       
    }

    updateItem(item) {
        this.props.updateItem(item.target.parentElement.id)   
    }

    render () {
        const content = ((this.props.content.length === 0)? null : 
        this.props.content.slice(0,this.state.slicedKey).map((item) => {
            return (
                <div  className="grid-container">
                    <div  id={item.id} key={item.id}>
                        <p > {item.title}</p>
                        <img  src={item.thumbnailUrl}></img>
                        <button  onClick={this.deleteItem.bind(this)} label="delete item"> Delete</button>
                        <button  onClick={this.updateItem.bind(this)} label="update item"> Update</button>
                    </div>
                </div>
            ) 
        }));
        return (
            <div className="container">
                 <h1> In Store</h1>
                {content}
            </div>
        );
    }
}

export default InStore;