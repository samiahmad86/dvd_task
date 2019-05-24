import React, { Component } from 'react';
import InStore from '../components/InStore';
import RentedOut from '../components/RentedOut';
import './parentContainer.css';
import ModaLContainer from '../components/ModalContainer';

class ParentContainer extends Component {
    state= {
        rentedOut: [],
        inStore: [],
        showModal: false
    }

    componentWillMount() {
        this.fetchContents();

    }

    fetchContents = () => {
        return fetch(" https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(res => {
         this.setState({inStore: res})
        });
    }

    deleteItem = (item) => {
        fetch(' https://jsonplaceholder.typicode.com/photos/'+item, {
            method: 'DELETE'
        })
        .then( res => {
           if (res.status === 200) {
            alert("Item Deleted");
           }
        });
    }

    updateItem = (item) => {
        this.setState({showModal: true});
    }
  
    render () {
        const modal = ((this.state.showModal)? <ModaLContainer/> : null)
        return (
            <div className="container">
                {modal}
                <RentedOut className="child" content={this.state.rentedOut}/>
                <InStore content={this.state.inStore} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
            </div>
        );
    }
}

export default ParentContainer;