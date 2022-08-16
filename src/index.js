import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


document.getElementById('header_div')?.addEventListener('mouseover', () => {
    document.getElementById('header_span').classList.add('text-sky-200');
    document.getElementById('header_span').classList.remove('text-sky-400');
})

document.getElementById('header_div')?.addEventListener('mouseout', () => {
    document.getElementById('header_span').classList.remove('text-sky-200');
    document.getElementById('header_span').classList.add('text-sky-400');
})

let addNoteBtn = document.getElementById('add_note_btn');

let noteName = document.getElementById('note_name');
let noteText = document.getElementById('note_text');

addNoteBtn?.addEventListener('click', () => {
    if (+noteName.value !== 0 && +noteText.value !== 0 && noteName.value !== 'all_notes_names') {

        noteName.classList.remove('bg-red-200');
        noteName.classList.add('bg-gray-300');
        noteName.classList.add('hover:bg-gray-400');
        noteName.classList.add('focus:bg-gray-400');

        noteText.classList.remove('bg-red-200');
        noteText.classList.add('bg-gray-300');
        noteText.classList.add('hover:bg-gray-400');
        noteText.classList.add('focus:bg-gray-400');

        let now = new Date();

        let year = now.getFullYear();
        let month = now.getMonth();
        let day = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        month = ['Января', 'Февряля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря'][month]

        now = `${day} ${month} ${year} в ${hours}:${minutes}`;

        let noteValues = JSON.stringify([noteText.value, now]);

        let notesNames = localStorage.getItem('all_notes_names');

        if (notesNames !== null) {
            notesNames = JSON.parse(notesNames);
        } else {
            notesNames = '[]';
            notesNames = JSON.parse(notesNames);
        }

        if (notesNames.indexOf(noteName.value) === -1) {

            localStorage.setItem(noteName.value, noteValues);

            notesNames.push(noteName.value);
            localStorage.setItem('all_notes_names', JSON.stringify(notesNames));
            window.location.href = '/';
        } else {
            alert('Заметка с таким названием уже существует');
        }
    } else {
        if (+noteName.value === 0 || noteName.value === 'all_notes_names') {
            noteName.classList.add('bg-red-200');
            noteName.classList.remove('bg-gray-300');
            noteName.classList.remove('hover:bg-gray-400');
            noteName.classList.remove('focus:bg-gray-400');
        } else {
            noteName.classList.remove('bg-red-200');
            noteName.classList.add('bg-gray-300');
            noteName.classList.add('hover:bg-gray-400');
            noteName.classList.add('focus:bg-gray-400');
        }

        if (+noteText.value === 0) {
            noteText.classList.add('bg-red-200');
            noteText.classList.remove('bg-gray-300');
            noteText.classList.remove('hover:bg-gray-400');
            noteText.classList.remove('focus:bg-gray-400');
        } else {
            noteText.classList.remove('bg-red-200');
            noteText.classList.add('bg-gray-300');
            noteText.classList.add('hover:bg-gray-400');
            noteText.classList.add('focus:bg-gray-400');
        }

        if (noteName.value === 'all_notes_names') {
            alert('Данное название недоступно');
        }
    }
})

let note1 = window.location.pathname
let note2 = note1.substr(note1.indexOf("/") + 1);
let noteId = note2.substr(note2.indexOf("/") + 1);

document.getElementById('edit_note_name').value = noteId;
document.getElementById('edit_note_text').value = JSON.parse(localStorage.getItem(noteId))[0];

let changeNoteBtn = document.getElementById('change_note_btn');

let noteNameEdit = document.getElementById('edit_note_name');
let noteTextEdit = document.getElementById('edit_note_text');

let notesNamesEdit;

changeNoteBtn?.addEventListener('click', () => {
    if (+noteNameEdit.value !== 0 && +noteTextEdit.value !== 0 && noteNameEdit.value !== 'all_notes_names') {

        noteNameEdit.classList.remove('bg-red-200');
        noteNameEdit.classList.add('bg-gray-300');
        noteNameEdit.classList.add('hover:bg-gray-400');
        noteNameEdit.classList.add('focus:bg-gray-400');

        noteTextEdit.classList.remove('bg-red-200');
        noteTextEdit.classList.add('bg-gray-300');
        noteTextEdit.classList.add('hover:bg-gray-400');
        noteTextEdit.classList.add('focus:bg-gray-400');

        let now = new Date();

        let year = now.getFullYear();
        let month = now.getMonth();
        let day = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        month = ['Января', 'Февряля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря'][month]

        now = `${day} ${month} ${year} в ${hours}:${minutes}`;

        let noteValues = JSON.stringify([noteTextEdit.value, now]);

        let notesNames = localStorage.getItem('all_notes_names');

        if (notesNames !== null) {
            notesNames = JSON.parse(notesNames);
        } else {
            notesNames = '[]';
            notesNames = JSON.parse(notesNames);
        }

        if (notesNames.indexOf(noteNameEdit.value) === -1) {
            localStorage.removeItem(noteId);

            notesNamesEdit = localStorage.getItem('all_notes_names');

            if (notesNamesEdit !== null) {
                notesNamesEdit = JSON.parse(notesNamesEdit);
            } else {
                notesNamesEdit = '[]';
                notesNamesEdit = JSON.parse(notesNamesEdit);
            }

            let myIndex = notesNamesEdit.indexOf(noteId);
            if (myIndex !== -1) {
                notesNamesEdit.splice(myIndex, 1);
            }

            localStorage.setItem('all_notes_names', JSON.stringify(notesNamesEdit));

            localStorage.setItem(noteNameEdit.value, noteValues);

            notesNames.push(noteNameEdit.value);
            localStorage.setItem('all_notes_names', JSON.stringify(notesNames));
            window.location.href = '/';
        } else {
            alert('Заметка с таким названием уже существует');
        }
    } else {
        if (+noteNameEdit.value === 0 || noteNameEdit.value === 'all_notes_names') {
            noteNameEdit.classList.add('bg-red-200');
            noteNameEdit.classList.remove('bg-gray-300');
            noteNameEdit.classList.remove('hover:bg-gray-400');
            noteNameEdit.classList.remove('focus:bg-gray-400');
        } else {
            noteNameEdit.classList.remove('bg-red-200');
            noteNameEdit.classList.add('bg-gray-300');
            noteNameEdit.classList.add('hover:bg-gray-400');
            noteNameEdit.classList.add('focus:bg-gray-400');
        }

        if (+noteTextEdit.value === 0) {
            noteTextEdit.classList.add('bg-red-200');
            noteTextEdit.classList.remove('bg-gray-300');
            noteTextEdit.classList.remove('hover:bg-gray-400');
            noteTextEdit.classList.remove('focus:bg-gray-400');
        } else {
            noteTextEdit.classList.remove('bg-red-200');
            noteTextEdit.classList.add('bg-gray-300');
            noteTextEdit.classList.add('hover:bg-gray-400');
            noteTextEdit.classList.add('focus:bg-gray-400');
        }

        if (noteNameEdit.value === 'all_notes_names') {
            alert('Данное название недоступно');
        }
    }
})