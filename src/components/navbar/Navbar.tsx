'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavItems from './NavItems';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="shadow-lg rounded-xl relative z-10">
            <div className="gap-5 p-2">
                <div className="flex">
                    <div className="hidden md:block">
                        <div className="justify-between p-2">
                            {NavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`${pathname === item.path
                                        ? 'bg-gray-900 text-white'
                                        : 'text-black-300 hover:border-2'
                                        } px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out border-2 border-transparent hover:border-gray-300`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className=" md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-4 rounded-md text-gray-100 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute p-5 bg-white z-50" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`${pathname === item.path
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-500 hover:text-white'
                                    } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
