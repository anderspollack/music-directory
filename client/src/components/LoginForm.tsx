import React, { FormEvent } from 'react';
import { useFormInput } from '../hooks';

const LoginForm: React.FC = () => {
    const emailField = useFormInput('');
    const passwordField = useFormInput('');

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        alert(`logging in ${ emailField.value }`);
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <div className="flex">
                <label>Email Address</label>
                <input
                    type="text"
                    { ...emailField }
                />    
            </div>
            <div className="flex">
                <label>Password</label>
                <input
                    type="text"
                    { ...passwordField }
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
