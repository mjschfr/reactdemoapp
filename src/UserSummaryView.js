import React, { Component } from 'react';
import fire from './services/firebase';
import AddUserView from "./AddUserView";
import UserSummaryItem from './UserSummaryItem';
import List from 'material-ui/List';

class UserSummaryView extends Component {
	constructor(props) {
	
		super(props);
	
		this.state = { users: [] };

	}
  
  	componentWillMount(){
 
    	let messagesRef = fire.database().ref('users').orderByKey().limitToLast(100);
    
    	messagesRef.on('child_added', snapshot => {
 
      		let users = this.state.users;
  			let user = Object.assign(snapshot.val(), {id:snapshot.key});

      		users.push(user);
      
      		this.setState({ users: users });
    	});

    	messagesRef.on('child_removed', snapshot => {
      
    		let users = this.state.users;

			for (var i = users.length - 1; i >= 0; --i) {
				if (users[i].id === snapshot.key) {
					users.splice(i,1);
				}
			}

      		this.setState({ users:users });
    	});

    }
 
	render() {
    	return (
    		<span>
	      		<AddUserView/>
		      	<List>
		          { 
		            this.state.users.map( user => <UserSummaryItem user={user} key={user.id.toString()}/> )
		          }
		        </List>
	        </span>

	    );

	}
  
}

export default UserSummaryView;