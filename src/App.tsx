import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";

import { Route, Switch} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import { store} from "./redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogContainer from "./components/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">

                <Header/>
                <NavBar/>
                <Friends friends={store.getState().friendsPage }/>


                <Switch>
               <Route render={()=> <ProfileContainer/>  } exact path={'/profile'} />
                    <Route render={() => <DialogContainer />}  exact path={'/dialogs'}/>
                    <Route render={() => <UsersContainer/>} exact  path={'/users'}/>
                    <Route render={() => <Settings/>}  exact path={'/settings'}/>
                    <Route render={() => <Music/>}  exact path={'/music'}/>
                    <Route render={() => <News/>} exact  path={'/news'}/>

                </Switch>



        </div>
    );
}

export default App;
