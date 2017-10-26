import React, { Component } from 'react';
import fire from './services/firebase';
import {List, ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class UserSummaryItem extends Component {

	constructor(props){
		
		super(props);
		
		this.state = {
			user: null
		}

	}

	handleClick(user){

		fire.database().ref('users/' + user.id).set(null);
	
	}

	render() {
		return (

			<ListItem primaryText={this.props.user.firstName + " " + this.props.user.lastName}  leftIcon={<AccountCircle />} rightIconButton={<span><EditIcon /><DeleteIcon onClick={() => this.handleClick(this.props.user)}/></span>} />

		);
	}

}

export default UserSummaryItem;


