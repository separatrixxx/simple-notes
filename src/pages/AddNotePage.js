import React from 'react';
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'


function AddNotePage () {
    return (
        <div className="flex justify-center items-center w-full bg-white scroll-smooth">
            <Header />
            <NoteForm />
        </div>
    );
}


export default AddNotePage;