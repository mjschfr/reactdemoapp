import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Home from "./Home";
import UserSummaryView from "./UserSummaryView";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
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
                            {/*<AddUserView/>*/}
                            <span className='content-span'>
                                <Route exact path="/" component={Home} />
                                <Route path="/usersummaryview" component={UserSummaryView} />
                            </span>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

injectTapEventPlugin();

export default App;
