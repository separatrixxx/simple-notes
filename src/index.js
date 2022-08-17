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

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

month = ['Января', 'Февряля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
    'Сентября', 'Октября', 'Ноября', 'Декабря'][month]

now = `${day} ${month} ${year} в ${hours}:${minutes}`;

addNoteBtn?.addEventListener('click', () => {
    if (+noteName.value !== 0 && +noteText.value !== 0 && delSpaces(noteName.value) !== 'all_notes_names') {

        document.getElementById('noteNameError').classList.add('hidden');

        noteName.classList.remove('bg-red-200');
        noteName.classList.add('bg-gray-200');
        noteName.classList.add('hover:bg-gray-300');
        noteName.classList.add('focus:bg-gray-300');

        noteText.classList.remove('bg-red-200');
        noteText.classList.add('bg-gray-200');
        noteText.classList.add('hover:bg-gray-300');
        noteText.classList.add('focus:bg-gray-300');

        let noteNameValue = noteName.value;
        noteNameValue = delSpaces(noteNameValue);

        let noteValues = JSON.stringify([noteText.value, now]);

        let notesNames = localStorage.getItem('all_notes_names');

        if (notesNames !== null) {
            notesNames = JSON.parse(notesNames);
        } else {
            notesNames = '[]';
            notesNames = JSON.parse(notesNames);
        }

        if (notesNames.indexOf(noteNameValue) === -1) {

            localStorage.setItem(noteNameValue, noteValues);

            notesNames.push(noteNameValue);
            localStorage.setItem('all_notes_names', JSON.stringify(notesNames));
            window.location.href = '/';
        } else {
            document.getElementById('noteNameError').innerHTML = 'Заметка с таким названием уже существует';
            document.getElementById('noteNameError').classList.remove('hidden');
        }
    } else {
        if (+delSpaces(noteName.value) === 0 || delSpaces(noteName.value) === 'all_notes_names') {

            document.getElementById('noteNameError').classList.add('hidden');

            noteName.classList.add('bg-red-200');
            noteName.classList.remove('bg-gray-200');
            noteName.classList.remove('hover:bg-gray-300');
            noteName.classList.remove('focus:bg-gray-300');
        } else {
            noteName.classList.remove('bg-red-200');
            noteName.classList.add('bg-gray-200');
            noteName.classList.add('hover:bg-gray-300');
            noteName.classList.add('focus:bg-gray-300');
        }

        if (+noteText.value === 0) {
            noteText.classList.add('bg-red-200');
            noteText.classList.remove('bg-gray-200');
            noteText.classList.remove('hover:bg-gray-300');
            noteText.classList.remove('focus:bg-gray-300');
        } else {
            noteText.classList.remove('bg-red-200');
            noteText.classList.add('bg-gray-200');
            noteText.classList.add('hover:bg-gray-300');
            noteText.classList.add('focus:bg-gray-300');
        }

        if (delSpaces(noteName.value) === 'all_notes_names') {
            document.getElementById('noteNameError').innerHTML = 'Данное название недоступно';
            document.getElementById('noteNameError').classList.remove('hidden');
        }
    }
})

let note1 = decodeURI(window.location.pathname);
let note2 = note1.substr(note1.indexOf("/") + 1);
let noteId = note2.substr(note2.indexOf("/") + 1);

noteId = delSpaces(noteId)

if (document.getElementById('edit_note_name') !== null) {
    document.getElementById('edit_note_name').value = noteId;
    document.getElementById('edit_note_text').value = JSON.parse(localStorage.getItem(noteId))[0];
}

let changeNoteBtn = document.getElementById('change_note_btn');

let noteNameEdit = document.getElementById('edit_note_name');
let noteTextEdit = document.getElementById('edit_note_text');

changeNoteBtn?.addEventListener('click', () => {
    if (+noteNameEdit.value !== 0 && +noteTextEdit.value !== 0 && delSpaces(noteNameEdit.value) !== 'all_notes_names') {

        let noteNameEditValue = noteNameEdit.value;
        noteNameEditValue = delSpaces(noteNameEditValue);

        noteNameEdit.classList.remove('bg-red-200');
        noteNameEdit.classList.add('bg-gray-200');
        noteNameEdit.classList.add('hover:bg-gray-300');
        noteNameEdit.classList.add('focus:bg-gray-300');

        noteTextEdit.classList.remove('bg-red-200');
        noteTextEdit.classList.add('bg-gray-200');
        noteTextEdit.classList.add('hover:bg-gray-300');
        noteTextEdit.classList.add('focus:bg-gray-300');

        let noteValues = JSON.stringify([noteTextEdit.value, now]);

        let notesNames = localStorage.getItem('all_notes_names');

        if (notesNames !== null) {
            notesNames = JSON.parse(notesNames);
        } else {
            notesNames = '[]';
            notesNames = JSON.parse(notesNames);
        }

        if (notesNames.indexOf(noteNameEditValue) === -1 || noteNameEditValue === noteId) {

            document.getElementById('noteNameError')?.classList.add('hidden');

            localStorage.removeItem(noteId);

            let myIndex = notesNames.indexOf(noteId);
            if (myIndex !== -1) {
                notesNames.splice(myIndex, 1);
            }

            localStorage.setItem('all_notes_names', JSON.stringify(notesNames));

            localStorage.setItem(noteNameEditValue, noteValues);

            notesNames.push(noteNameEditValue);
            localStorage.setItem('all_notes_names', JSON.stringify(notesNames));

            window.location.href = '/';
        } else {
            document.getElementById('noteNameError').innerHTML = 'Заметка с таким названием уже существует';
            document.getElementById('noteNameError').classList.remove('hidden');
        }
    } else {
        if (+delSpaces(noteNameEdit.value) === 0 || delSpaces(noteNameEdit.value) === 'all_notes_names') {

            document.getElementById('noteNameError').classList.add('hidden');

            noteNameEdit.classList.add('bg-red-200');
            noteNameEdit.classList.remove('bg-gray-200');
            noteNameEdit.classList.remove('hover:bg-gray-300');
            noteNameEdit.classList.remove('focus:bg-gray-300');
        } else {
            noteNameEdit.classList.remove('bg-red-200');
            noteNameEdit.classList.add('bg-gray-200');
            noteNameEdit.classList.add('hover:bg-gray-300');
            noteNameEdit.classList.add('focus:bg-gray-300');
        }

        if (+noteTextEdit.value === 0) {
            noteTextEdit.classList.add('bg-red-200');
            noteTextEdit.classList.remove('bg-gray-200');
            noteTextEdit.classList.remove('hover:bg-gray-300');
            noteTextEdit.classList.remove('focus:bg-gray-300');
        } else {
            noteTextEdit.classList.remove('bg-red-200');
            noteTextEdit.classList.add('bg-gray-200');
            noteTextEdit.classList.add('hover:bg-gray-300');
            noteTextEdit.classList.add('focus:bg-gray-300');
        }

        if (delSpaces(noteNameEdit.value) === 'all_notes_names') {
            document.getElementById('noteNameError').innerHTML = 'Данное название недоступно';
            document.getElementById('noteNameError').classList.remove('hidden');
        }
    }
})

function delSpaces(str) {
    let lastEl = str.substring(str.length - 1, str.length);
    let firstEl = str.substring(0, 1);

    while (lastEl === ' ') {
        str = str.substring(0, str.length - 1);

        lastEl = str.substring(str.length - 1, str.length);
    }

    while (firstEl === ' ') {
        str = str.substring(1, str.length);

        firstEl = str.substring(0, 1);
    }

    return str;
}

let input = document.getElementById('search');

input?.addEventListener('keypress', function(e){
    if(e.which === 13){
        e.preventDefault();
        let val = document.getElementById('search').value;

        if (val !== '') {
            window.location.href = `/search/${val}`;
        } else {
            window.location.href = '/';
        }
    }
});

if (document.getElementById('search') !== null) {
    document.getElementById('search').value = noteId;
}


let notesNames = localStorage.getItem('all_notes_names');

if (notesNames !== null) {
    notesNames = JSON.parse(notesNames);
} else {
    notesNames = '[]';
    notesNames = JSON.parse(notesNames);
}

for (let value of notesNames) {
    let contentId = 'note_content_' + value;
    let textId = 'note_text_' + value;
    document.getElementById(contentId)?.addEventListener('mouseover', () => {
        document.getElementById(textId).classList.remove('truncate');
    })

    document.getElementById(contentId)?.addEventListener('mouseout', () => {
        document.getElementById(textId).classList.add('truncate');
    })
}

document.getElementById('delete_note_btn')?.addEventListener('click', () => {
    document.getElementById('change_note_btn')?.classList.add('hidden');
    document.getElementById('delete_note_btn')?.classList.add('hidden');

    document.getElementById('are_you_sure')?.classList.remove('hidden');
    document.getElementById('cancel_delete_btn')?.classList.remove('hidden');
    document.getElementById('confirm_delete_btn')?.classList.remove('hidden');
})

document.getElementById('cancel_delete_btn')?.addEventListener('click', () => {
    document.getElementById('change_note_btn')?.classList.remove('hidden');
    document.getElementById('delete_note_btn')?.classList.remove('hidden');

    document.getElementById('are_you_sure')?.classList.add('hidden');
    document.getElementById('cancel_delete_btn')?.classList.add('hidden');
    document.getElementById('confirm_delete_btn')?.classList.add('hidden');
})


document.getElementById('notes_all_delete')?.addEventListener('click', () => {
    document.getElementById('notes_all_delete')?.classList.add('hidden');

    document.getElementById('cancel_all_delete')?.classList.remove('hidden');
    document.getElementById('confirm_all_delete')?.classList.remove('hidden');
})

document.getElementById('cancel_all_delete')?.addEventListener('click', () => {
    document.getElementById('notes_all_delete')?.classList.remove('hidden');

    document.getElementById('cancel_all_delete')?.classList.add('hidden');
    document.getElementById('confirm_all_delete')?.classList.add('hidden');
})
