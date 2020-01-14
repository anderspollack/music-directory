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
            <div className="border-box w-100 h-100 helvetica light-green bg-navy">
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route path='/test'>
                        <div>test</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;