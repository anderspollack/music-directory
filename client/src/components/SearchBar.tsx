import React, { useEffect, FormEvent } from 'react';
import { useFormInput, useWindowResolution } from '../hooks'

const SearchBar: React.FC = () => {
    const searchTerm = useFormInput('');
    const { width, height } = useWindowResolution();

    useEffect(() => {
        // can hit rovi auto suggest api here
        console.log('using effect in searchBar')
    })

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        alert(`submitting ${searchTerm.value}`)
    }

    return (
        <div className="flex br-pill ba items-center mh7">
            <span className="pa3">Search:</span>
            <form
                className="w-80"
                onSubmit={handleSubmit} 
                autoComplete="off"
            >
                <input 
                    className="w-100 light-green bg-navy input-reset bn pa2 br-pill"
                    { ...searchTerm } 
                />
            </form>
        </div>
    );
};

export default SearchBar;