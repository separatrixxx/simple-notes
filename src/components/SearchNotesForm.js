import React from "react";

class SearchNotesForm extends React.Component {

    render() {

        let note1 = decodeURI(window.location.pathname);
        let note2 = note1.substr(note1.indexOf("/") + 1);
        let noteId = note2.substr(note2.indexOf("/") + 1);

        let lastEl = noteId.substring(noteId.length - 1, noteId.length);
        let firstEl = noteId.substring(0, 1);

        while (lastEl === ' ') {
            noteId = noteId.substring(0, noteId.length - 1);

            lastEl = noteId.substring(noteId.length - 1, noteId.length);
        }

        while (firstEl === ' ') {
            noteId = noteId.substring(1, noteId.length);

            firstEl = noteId.substring(0, 1);
        }

        let list = localStorage.getItem('all_notes_names');
        if (list !== null) {
            list = JSON.parse(list);
        } else {
            list = '[]';
            list = JSON.parse(list);
        }

        list = list.reverse()
        let listNew = []

        for (let value of list) {

            if (value.toLowerCase().indexOf(noteId.toLowerCase()) !== -1) {
                listNew.push(value)
            }
        }

        if (+listNew !== 0) {
            return (
                <div className="flex flex-col items-center mb-7">
                    <div className="flex flex-row justify-center mt-3">
                        <p id="notes_all_delete" className="text-gray-400 text-xs hover:text-red-400 transition-all
                    duration-500 ease-in-out cursor-pointer select-none">Удалить все заметки?</p>
                        <p id="cancel_all_delete" className="text-gray-400 text-xs hover:text-sky-400 transition-all
                    duration-500 ease-in-out cursor-pointer mr-2 md:mr-3 hidden select-none">Отмена</p>
                        <p id="confirm_all_delete" onClick={deleteAllNotes} className="text-gray-400 text-xs hover:text-red-400 transition-all
                    duration-500 ease-in-out cursor-pointer ml-2 md:ml-3 hidden select-none">Удалить</p>
                    </div>
                    {listNew.map(item => (
                        <a key={item} href={`/notes/${item}`} id={`note_content_${item}`} className="w-72 md:w-2/3 flex flex-col
                        items-left bg-black/10 rounded-2xl my-1 md:my-3 px-5 py-1 md:py-3 hover:break-words text-clip
                        hover:w-7/10 transition-all duration-500 ease-in-out cursor-pointer">
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
                <div className="flex justify-center mt-48 px-10 text-center">
                    <h1 className="text-lg md:text-xl text-sky-400">
                        Не найдено заметок с таким названием :(
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

export default SearchNotesForm;