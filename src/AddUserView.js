import React, { Component } from 'react';
import fire from './services/firebase';

class AddUserView extends Component {
 
    addUser(e){
        e.preventDefault(); 

        fire.database().ref('users').push({
            firstName: this.firstNameEl.value,
            lastName: this.lastNameEl.value
        });

    }

    render() {
        return (
            <span>
                <h4>Add User</h4>
                <form onSubmit={this.addUser.bind(this)}>
                 
                    <input type="text" ref={ el => this.firstNameEl = el }/>
                    <input type="text" ref={ el => this.lastNameEl = el }/>
                    <input type="submit"/>
                </form>
            </span>
        );
    }
 
}

export default AddUserView;