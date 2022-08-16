import React from 'react';
import Header from '../components/Header'
import SearchNotesForm from '../components/SearchNotesForm'
import AddNote from '../components/AddNote'
import {IoIosSearch} from "react-icons/io";


function SearchNotes () {

    document.title = 'Поиск заметок';

    return (
        <div id="first_div" className="w-full bg-white scroll-smooth">
            <Header />
            <div className="flex flex-col items-center mt-20 md:mt-24 mb-7">
                <label className="w-72 flex items-center md:w-2/3 block rounded-full">
                    <span className="absolute flex items-center pl-2 text-slate-400 text-md md:text-xl">
                        <IoIosSearch />
                    </span>
                    <input id="search"
                           className="block shadow-inner w-full h-10 rounded-full pl-8 p-3 focus:outline-none text-sky-400
                            focus:border-sky-400 hover:ring-sky-400 hover:ring-2 focus:ring-2 focus:ring-sky-400 bg-black/10
                            ease-in-out duration-300"
                           placeholder="" type="text" name="search"/>
                </label>
            </div>
            <SearchNotesForm />
            <AddNote />
        </div>
    );
}

export default SearchNotes;