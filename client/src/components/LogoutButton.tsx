import React, { FormEvent } from 'react';
import { useFormInput } from '../hooks';
import firebase from 'firebase/app';
import "firebase/auth";

const LogoutButton: React.FC = () => {

    const handleClick = async (e: FormEvent): Promise<void> => {
        try {
            e.preventDefault();
            const firebaseResponse = await firebase.auth()
                .signOut();

            console.log('response', firebaseResponse);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleClick}>
            Logout
        </button>
    );
};

export default LogoutButton;