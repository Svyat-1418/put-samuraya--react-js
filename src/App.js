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
import StoreContext from "./StoreContext";

const App = (props) => {
    return (
        <div className="appWrapper">
            <Header/>
            <StoreContext>
                {store => <Navbar state={store.getState().sidebar}/>}
            </StoreContext>
            <div className='app-wrapper_content'>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer />}/>
                <Route path='/profile' render={() =>
                    <Profile />}/>
            </div>
        </div>
    );
}
export default App;