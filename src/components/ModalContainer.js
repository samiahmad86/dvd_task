import React, { Component } from 'react';
import "./modalContainer.css";

class ModalContainer extends Component {
    render () {

        return (
            <div >
                <h1> Update Item</h1>
                <form>
                    <input type="text" placeholder="Movie Title" label="Movie Title"></input>
                    <button label="Update"> update </button>
                </form>
               
            </div>
        );
    }
}

export default ModalContainer;