import React from 'react';

export const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full z-30 flex justify-center items-center bg-white'>
            <div className="container flex items-center justify-between gap-8 py-4 px-8">

                <div className="flex items-center gap-2 font-bold uppercase w-[100px]">
                    <img src="./img/logo_tungg.png" alt="" className='h-8 object-contain' />
                    {/* <p>TunGG</p> */}
                </div>
                <div className="flex gap-8">
                    <a>Pembahasan</a>
                    <a>Nonton Kuy</a>
                    <a >Merchandise</a>
                    <a >Contact Me</a>
                </div>
                <div className="w-[100px]"></div>
            </div>
        </nav>
    );
};