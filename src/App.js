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
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";

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
                    dialogsPage={props.state.dialogsPage}
                    sendNewMessage={props.sendNewMessage}
                    updateNewMessageText={props.updateNewMessageText}
                    newMessageText ={props.state.dialogsPage.newMessageText}/>} />
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>} />
            </div>
        </div>
    );
}
export default App;