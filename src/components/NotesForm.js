import React from "react";


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
                    <p onClick={deleteAllNotes} className="text-gray-400 text-xs hover:text-red-400 transition-all
                    duration-500 ease-in-out cursor-pointer mt-3">Удалить все заметки?</p>
                    {list.map(item => (
                        <a href={`/notes/${item}`} className="w-72 md:w-2/3 flex flex-col items-left bg-black/10 rounded-2xl my-1 md:my-3
                    px-5 py-1 md:py-3 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                            <h1 className="text-lg md:text-xl text-sky-400">{item}</h1>
                            <p className="text-sm md:text-base text-gray-400">{JSON.parse(localStorage.getItem(item))[0]}</p>
                            <p className="text-xs md:text-sm text-gray-400 mt-3 mb-1">{JSON.parse(localStorage.getItem(item))[1]}</p>
                        </a>

                    ))}
                </div>
            );
        } else {
            return (
                <div className="flex flex-col items-center mt-48">
                    <h1 className="text-lg md:text-xl text-sky-400">
                         У вас нет ни одной заметки :(
                    </h1>
                </div>
            );
        }

        function deleteAllNotes() {
            // eslint-disable-next-line no-restricted-globals
            let isDelete = confirm("Удалить заметку?");

            if (isDelete) {
                localStorage.clear();
                window.location.reload();
            }
        }
    }
}

export default NotesForm;