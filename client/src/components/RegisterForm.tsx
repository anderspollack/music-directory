import React, { FormEvent, useEffect } from 'react';
import { useContextState } from '../context';
import { useFormInput } from '../hooks';

import axios from 'axios';
import firebase from 'firebase/app';
import "firebase/auth";

const RegisterForm: React.FC = () => {
    const usernameField = useFormInput('');
    const emailField = useFormInput('');
    const passwordField = useFormInput('');
    const passwordConfirmField = useFormInput('');
    const [{ authState }, dispatch] = useContextState();

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        try {
            e.preventDefault();
            const firebaseResponse = await firebase.auth()
                .createUserWithEmailAndPassword(
                    emailField.value, passwordField.value
                );
            if (firebaseResponse && firebaseResponse.user) {
                dispatch({
                    type: 'setAuthState',
                    authState: { uid: firebaseResponse.user.uid }
                });

                const idToken = await firebase.auth()
                    .currentUser?.getIdToken();

                console.log("idToken: ", idToken);
                
                const res = await axios
                    .post('http://localhost:3001/api/auth/register', 
                        {},
                        {
                            headers: {
                                authorization: idToken,
                            },
                        }
                    );

                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
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
