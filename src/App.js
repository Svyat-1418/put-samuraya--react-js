import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <div className="appWrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper_content'>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile
                    store={props.store}/>}/>
            </div>
        </div>
    );
}
export default App;