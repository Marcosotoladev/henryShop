"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const NavLogin = () => {
    const router = useRouter();
    const { user, logout } = useAuth(); 

    const handleLogout = () => {
        logout(); 

            router.push('/');
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='border-2 border-gray-900 p-2 rounded-full'>
                <Link href="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                </Link>
            </div>
            <div className='gap-4 flex'>
                {!user ? (
                    <>
                        <Link href="/login">
                            <button className="bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign In
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign Up
                            </button>
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-900 hover:bg-red-800 px-4 py-2 rounded-md text-white text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavLogin;

