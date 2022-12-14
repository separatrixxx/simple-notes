import React from "react";
import {IoIosSearch} from "react-icons/io";


class NotesForm extends React.Component {

    render() {

        let list = localStorage.getItem('all_notes_names');
        if (list !== null) {
            list = JSON.parse(list);
        } else {
            list = '[]';
            list = JSON.parse(list);
        }

        list = list.reverse()

        if (+list !== 0) {
            return (
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
                    <div className="flex flex-row justify-center mt-3">
                        <p id="notes_all_delete" className="text-gray-400 text-xs hover:text-red-400 transition-all
                    duration-500 ease-in-out cursor-pointer select-none">Удалить все заметки?</p>
                        <p id="cancel_all_delete" className="text-gray-400 text-xs hover:text-sky-400 transition-all
                    duration-500 ease-in-out cursor-pointer mr-2 md:mr-3 hidden select-none">Отмена</p>
                        <p id="confirm_all_delete" onClick={deleteAllNotes} className="text-gray-400 text-xs hover:text-red-400 transition-all
                    duration-500 ease-in-out cursor-pointer ml-2 md:ml-3 hidden select-none">Удалить</p>
                    </div>
                    {list.map(item => (

                        <a key={item} href={`/notes/${item}`} id={`note_content_${item}`} className="w-72 md:w-2/3 flex flex-col
                        items-left bg-gray-200 rounded-2xl my-1 md:my-3 px-5 py-1 md:py-3 hover:break-words text-clip
                        hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                            <h1 className="truncate text-lg md:text-xl text-sky-400">{item}</h1>
                            <p id={`note_text_${item}`} className="truncate text-sm md:text-base text-gray-400">
                                {JSON.parse(localStorage.getItem(item))[0]}</p>
                            <p className="text-xs text-gray-400 mt-3 mb-1">{JSON.parse(localStorage.getItem(item))[1]}</p>
                        </a>

                    ))}
                </div>
            );
        } else {
            return (
                <div className="flex h-screen justify-center items-center px-10 text-center">
                    <h1 className="text-lg md:text-xl text-sky-400">
                         У вас нет ни одной заметки :(
                    </h1>
                </div>
            );
        }

        function deleteAllNotes() {
            localStorage.clear();
            window.location.href = '/';
        }
    }
}

export default NotesForm;