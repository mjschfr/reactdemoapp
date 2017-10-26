import React, { Component } from 'react';
import fire from './services/firebase';

class MessagesView extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      //debugger;
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
    messagesRef.on('child_removed', snapshot => {
      //debugger;
      /* Update React state when message is added at Firebase Database */
      //console.log(this.state.messages);
      let message = { text: snapshot.val(), id: snapshot.key };
      
      let messages = this.state.messages;

      for (var i = messages.length - 1; i >= 0; --i) {
        console.log(messages[i].id + " - " + snapshot.key);
    if (messages[i].id == snapshot.key) {
      console.log('matched');
        messages.splice(i,1);
    }
}

      this.setState({ messages: messages });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
    this.inputEl.focus();
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default MessagesView;