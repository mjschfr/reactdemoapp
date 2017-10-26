import React, { Component } from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import EditIcon from 'material-ui/svg-icons/image/edit';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


class UserSummaryItem extends Component {

	constructor(props){
		super(props);
		this.state = {
			user: null
		}
	}

	handleClick(user){
		//do something here, maybe dispatch delete_user action to delete user from the store
		console.log(user)
	}
  render() {


    return (

    <ListItem primaryText={this.props.user.firstName + " " + this.props.user.lastName}  leftIcon={<AccountCircle />} rightIcon={<EditIcon />} onClick={() => this.handleClick(this.props.user)}/>



    );
  }
  

}





export default UserSummaryItem;


