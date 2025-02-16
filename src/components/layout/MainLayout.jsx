import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = () => {

    return (
        <main className='flex flex-col min-h-dvh justify-between font-light'>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
}