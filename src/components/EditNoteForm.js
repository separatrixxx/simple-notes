import React from 'react';

function EditNoteForm () {

    let notesNames = localStorage.getItem('all_notes_names');

    if (notesNames !== null) {
        notesNames = JSON.parse(notesNames);
    } else {
        notesNames = '[]';
        notesNames = JSON.parse(notesNames);
    }

    let note1 = decodeURI(window.location.pathname);
    let note2 = note1.substr(note1.indexOf("/") + 1);
    let noteId = note2.substr(note2.indexOf("/") + 1);

    if (notesNames.indexOf(noteId) !== -1) {
        return (
            <div className="w-full flex flex-col items-center p-5 lg:p-10 mt-32 mx-5 md:mx-10">
                <div className="w-full flex flex-col items-center">
                    <label htmlFor="formName" className="text-sm md:text-base text-sky-400">Название:</label>
                    <input id="edit_note_name" type="text" name="name" className="w-72 md:w-2/3 h-10 rounded-full mt-1 bg-gray-200
                text-gray-700 px-3 focus:outline-none hover:bg-gray-300 focus:bg-gray-300
                transition-colors duration-300 ease-in-out" />
                </div>
                <div className="w-full flex flex-col items-center mt-3">
                    <label htmlFor="formMessage" className="text-sm md:text-base text-sky-400">Заметка:</label>
                    <textarea id="edit_note_text" name="message"  className="w-72 md:w-2/3 h-48 rounded-2xl mt-1 bg-gray-200
                text-gray-700 px-3 py-1 focus:outline-none hover:bg-gray-300 focus:bg-gray-300
                transition-colors duration-300 ease-in-out"></textarea>
                </div>
                <p id="are_you_sure" className="mt-5 text-xs text-gray-700 hidden select-none">Вы уверены?</p>
                <div className="flex flex-col md:flex-row mt-7">
                    <button id="change_note_btn" className="w-56 h-10 rounded-full bg-sky-400 text-white text-sm lg:text-base
                 hover:scale-105 transition-all duration-300 ease-in-out mx-0 md:mx-5">Изменить заметку</button>
                    <button id="delete_note_btn" className="w-56 h-10 rounded-full bg-red-400 text-white text-sm lg:text-base
                 hover:scale-105 transition-all duration-300 ease-in-out mx-0 md:mx-5 mt-3 md:mt-0">Удалить заметку</button>

                    <button id="cancel_delete_btn" className="w-56 h-10 rounded-full bg-sky-400 text-white text-sm lg:text-base
                 hover:scale-105 transition-all duration-300 ease-in-out mx-0 md:mx-5 hidden select-none">Отмена</button>
                    <button id="confirm_delete_btn" onClick={deleteNote} className="w-56 h-10 rounded-full bg-red-400 text-white text-sm lg:text-base
                 hover:scale-105 transition-all duration-300 ease-in-out mx-0 md:mx-5 mt-3 md:mt-0 hidden select-none">Удалить</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex h-screen justify-center items-center px-10 text-center">
                <h1 className="text-lg md:text-xl text-sky-400">
                    Заметки с таким именем не существует :(
                </h1>
            </div>
        );
    }
}

function deleteNote() {

    let note1 = decodeURI(window.location.pathname);
    let note2 = note1.substr(note1.indexOf("/") + 1);
    let noteId = note2.substr(note2.indexOf("/") + 1);

    localStorage.removeItem(noteId);

    let notesNames = localStorage.getItem('all_notes_names');

    if (notesNames !== null) {
        notesNames = JSON.parse(notesNames);
    } else {
        notesNames = '[]';
        notesNames = JSON.parse(notesNames);
    }

    let myIndex = notesNames.indexOf(noteId);
    if (myIndex !== -1) {
        notesNames.splice(myIndex, 1);
    }

    localStorage.setItem('all_notes_names', JSON.stringify(notesNames));
    window.location.href = '/';
}


export default EditNoteForm;