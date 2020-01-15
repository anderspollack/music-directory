import React, { FormEvent } from 'react';
import { useFormInput } from '../hooks';
import firebase from 'firebase/app';
import "firebase/auth";

const LoginForm: React.FC = () => {
    const emailField = useFormInput('');
    const passwordField = useFormInput('');

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        try {
            e.preventDefault();
            const firebaseResponse = await firebase.auth()
                .signInWithEmailAndPassword(
                    emailField.value, passwordField.value
                );

            console.log('response', firebaseResponse);
        } catch (error) {
            console.error(error);
        }
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
                    type="password"
                    { ...passwordField }
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
