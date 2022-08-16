import React from 'react';
import Header from '../components/Header'
import SearchNotesForm from '../components/SearchNotesForm'
import AddNote from '../components/AddNote'
import SearchForm from '../components/SearchForm'


function SearchNotes () {

    document.title = 'Поиск заметок';

    return (
        <div id="first_div" className="w-full bg-white scroll-smooth">
            <Header />
            <SearchForm />
            <SearchNotesForm />
            <AddNote />
        </div>
    );
}

export default SearchNotes;