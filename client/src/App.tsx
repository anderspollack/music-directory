import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
                <Route path='/test'>
                    <div>test</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;