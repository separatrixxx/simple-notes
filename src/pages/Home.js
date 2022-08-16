import React from 'react';
import Header from '../components/Header'
import NotesForm from '../components/NotesForm'
import AddNote from '../components/AddNote'
import SearchForm from "../components/SearchForm";


function Home () {
    return (
        <div id="first_div" className="w-full bg-white scroll-smooth">
            <Header />
            <SearchForm />
            <NotesForm />
            <AddNote />
        </div>
    );
}

export default Home;