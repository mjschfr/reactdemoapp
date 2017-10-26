import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddUserView extends Component {
  render() {
    return (
    <div className="add-user-view">
    	<h4>Add User</h4>
		<TextField hintText="First Name"/>&nbsp;&nbsp;&nbsp;
		<TextField hintText="Last Name"/>
		<FlatButton label="Add User" primary={true} />
    </div>
   
    );
  }
 
}





export default AddUserView;


