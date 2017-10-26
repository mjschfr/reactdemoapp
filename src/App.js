import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { userData } from './data/store'



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';


import Home from "./Home";
import UserSummaryView from "./UserSummaryView";
import AddUserView from "./AddUserView";
import MessagesView from "./MessagesView";

import './App.css';


let store = createStore(userData);

class App extends Component {
 
    render() {
        return (
            <Router>
            <Provider store={store}>
            <MuiThemeProvider>
<div className="page-container">
<AppBar title="Demo React App" iconElementLeft={
    <IconMenu iconButtonElement={<IconButton><Menu /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <NavLink to="/" exact   activeClassName='active'><MenuItem primaryText="Home" /></NavLink>
      <NavLink to="/usersummaryview" exact   activeClassName='active'><MenuItem primaryText="Users Summary" /></NavLink>
    </IconMenu>}/>
                    <div className="app">
                    <MessagesView/>
<AddUserView/>
                        <span className='content-span'>
                            <Route exact path="/" component={Home} />
                            <Route path="/usersummaryview" component={UserSummaryView} />
                        </span>
                   

                    
                        
                   
                        
                        
                        {/*<div className='menu'>
                            <ul>
                                <li><NavLink to="/" exact   activeClassName='active'>Home</NavLink></li>
                                <li><NavLink to="/usersummaryview"    activeClassName='active'>User Summary</NavLink></li>
                            </ul>
                        </div>*/}

                        

                    </div>
              
</div>
                </MuiThemeProvider>
                </Provider>
            </Router>

        );
    }
}
injectTapEventPlugin();
export default App;
