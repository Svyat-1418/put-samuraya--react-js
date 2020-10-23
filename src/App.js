import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className="appWrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper_content'>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/dialogs' render={() => <Dialogs
                    //dialogsPage={props.state.dialogsPage}
                    //dispatch={props.dispatch}
                    //newMessageText ={props.state.dialogsPage.newMessageBody}
                      store={props.store}/>} />
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>} />
            </div>
        </div>
    );
}
export default App;