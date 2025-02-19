import React from 'react';

export const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full z-30 flex justify-center items-center backdrop-blur-2xl'>
            <div className="container flex items-center justify-between gap-8 py-4 px-8">

                <a href='#' target='_top' className="flex items-center gap-2 font-bold uppercase w-[100px]">
                    <img src="./img/logo_tungg.png" alt="" className='h-8 object-contain' />
                    {/* <p>TunGG</p> */}
                </a>
                <div className="flex gap-8">
                    <a href='#pembahasan'>Pembahasan</a>
                    <a href='#nonton_kuy'>Nonton Kuy</a>
                    <a href='#merchandise'>Merchandise</a>
                    <a href='#contact_me'>Contact Me</a>
                </div>
                <div className="w-[100px]"></div>
            </div>
        </nav>
    );
};