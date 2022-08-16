import React from 'react';

function Home () {
    return (
        <a href="/" id="header_div" className="flex flex-col absolute top-0 left-0 m-3 md:m-5 text-gray-400 hover:text-gray-300
        transition-all duration-500 ease-in-out cursor-pointer">
            <h1 className="text-xl md:text-3xl">
                Simple
                <span id="header_span" className="font-black text-sky-400 transition-all duration-500 ease-in-out"> Notes</span>
            </h1>
            <p className="text-xs">by <span className="font-bold">separatrix</span></p>
        </a>
    );
}

export default Home;