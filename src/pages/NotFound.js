import React from 'react';

function NotFound () {

    document.title = '404';

    return (
        <div className="scroll-smooth bg-white w-full h-screen flex flex-col justify-center items-center p-5">
            <a href="/" className="mt-10 px-7 py-5 rounded-full md:mt-16 text-xl md:text-5xl text-gray-400 text-center
            hover:bg-black/5 hover:text-gray-300 transition-colors duration-500 font-black">Данной страницы не существует</a>
        </div>
    );
}

export default NotFound;