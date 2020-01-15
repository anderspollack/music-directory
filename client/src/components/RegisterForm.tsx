import React, { FormEvent } from 'react';
import { useFormInput } from '../hooks';

const RegisterForm: React.FC = () => {
    const usernameField = useFormInput('');
    const emailField = useFormInput('');
    const passwordField = useFormInput('');
    const passwordConfirmField = useFormInput('');

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        alert(`Registering ${ usernameField.value }`);
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <div className="flex">
                <label>Display Name</label>
                <input
                    type="text"
                    { ...usernameField }
                />    
            </div>
            <div className="flex">
                <label>Email Address</label>
                <input
                    type="email"
                    { ...emailField }
                />    
            </div>
            <div className="flex">
                <label>Password</label>
                <input
                    type="password"
                    { ...passwordField }
                />
            </div>
            <div className="flex">
                <label>Confirm Password</label>
                <input
                    type="password"
                    { ...passwordConfirmField }
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
