import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="border-box w-100 h-100 helvetica light-green bg-navy">
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route path='/register'>
                        <div>test</div>
                    </Route>
                </Switch>
                <AuthPage />
            </div>
        </Router>
    );
}

export default App;
