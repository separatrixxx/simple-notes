import React from 'react';


function NoteForm () {
    return (
        <div className="w-full flex flex-col items-center p-5 lg:p-10 mt-32 mx-5 md:mx-10">
            <div className="w-full flex flex-col items-center">
                <label htmlFor="formName" className="text-sm md:text-base text-sky-400">Название:</label>
                <input id="note_name" type="text" name="name" className="w-72 md:w-2/3 h-10 rounded-full mt-1 bg-gray-200
                text-gray-700 px-3 focus:outline-none hover:bg-gray-300 focus:bg-gray-300
                transition-colors duration-300 ease-in-out" />
            </div>
            <div className="w-full flex flex-col items-center mt-3">
                <label htmlFor="formMessage" className="text-sm md:text-base text-sky-400">Заметка:</label>
                <textarea id="note_text" name="message"  className="w-72 md:w-2/3 h-48 rounded-2xl mt-1 bg-gray-200
                text-gray-700 px-3 py-1 focus:outline-none hover:bg-gray-300 focus:bg-gray-300
                transition-colors duration-300 ease-in-out"></textarea>
            </div>
            <div className="mt-7">
                <button id="add_note_btn" className="w-56 h-10 rounded-full bg-sky-400 text-white text-sm lg:text-base
                 hover:scale-105 transition-all duration-300 ease-in-out">Добавить заметку</button>
            </div>
        </div>
    );
}


export default NoteForm;