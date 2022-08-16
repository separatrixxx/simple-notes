import React from 'react';
import {IoMdAdd} from "react-icons/io";

function Home () {
    return (
        <a href="/add_note" className="w-max h-max rounded-full bg-white text-sky-400 p-2 md:p-3 text-3xl md:text-5xl shadow-2xl
        cursor-pointer hover:bg-sky-400 hover:text-white hover:scale-105 transition-all duration-500 ease-in-out
        absolute bottom-0 right-0 m-5 md:m-10">
            <IoMdAdd />
        </a>
    );
}


export default Home;