import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

import { StateProvider } from './context';

import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {

    const initialState = {
        authState: { 
            uid: '',
        }
    };
      
    const reducer = (state, action) => {
        switch (action.type) {
            case 'setAuthState':
                return {
                ...state,
                authState: action.authState,
                };
            
            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Router>
                <div className="border-box w-100 h-100 helvetica light-green bg-navy">
                    {/* <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                        <Route path='/register'>
                            <div>test</div>
                        </Route>
                    </Switch> */}
                    <AuthPage />
                </div>
            </Router>
        </StateProvider>
    );
}

export default App;
