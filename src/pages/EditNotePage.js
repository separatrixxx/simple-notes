import React from 'react';
import Header from '../components/Header'
import EditNoteForm from '../components/EditNoteForm'


function EditNotePage () {

    document.title = 'Изменить заметку';

    return (
        <div className="flex justify-center items-center w-full bg-white scroll-smooth">
            <Header />
            <EditNoteForm />
        </div>
    );
}


export default EditNotePage;