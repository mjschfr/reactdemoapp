import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as data from './data/data.js';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import EditIcon from 'material-ui/svg-icons/image/edit';

import UserSummaryItem from './UserSummaryItem';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
const users = data.users();

const userItems = users.map((user) => 
		
		<UserSummaryItem user={user} key={user.id.toString()}/>
   



);

class UserSummaryView extends Component {
  render() {
    return (
     
<div className="user-summary-view">
<h4>Current Users</h4>
<List>
{userItems}
</List>

   </div>



    );
  }
  

}





export default UserSummaryView;


