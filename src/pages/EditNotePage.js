import React from 'react';
import Header from '../components/Header'
import EditNoteForm from '../components/EditNoteForm'


function EditNotePage () {

    let note1 = decodeURI(window.location.pathname);
    let note2 = note1.substr(note1.indexOf("/") + 1);
    let noteId = note2.substr(note2.indexOf("/") + 1);

    document.title = 'Заметка - ' + noteId;

    return (
        <div className="flex justify-center items-center w-full bg-white scroll-smooth">
            <Header />
            <EditNoteForm />
        </div>
    );
}


export default EditNotePage;