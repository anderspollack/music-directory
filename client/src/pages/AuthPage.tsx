import React from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

// add firebase client sdk
// add form inputs
// add firebase env variables
// communicate from here to server with response token

const AuthPage: React.FC = () => {
    return (
        <div>
            AuthPage
            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default AuthPage;
