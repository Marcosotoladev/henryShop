"use client";

import React from 'react';
import Navbar from './Navbar';
import SearchBox from '../searchBox/SearchBox';
import NavLogin from './NavLogin';
import NavCart from './NavCart';
import NavLogo from './NavLogo';
import Categories from '../categories/Categories';
import { useAuth } from '../../context/AuthContext';

const NavbarView: React.FC = () => {
    const { user } = useAuth();


    return (
        <nav>
            <div className="p-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center ">

                    <div className="flex flex-wrap items-end justify-start gap-4 sm:order-1 order-2 ">
                        <div className='hidden sm:block'>
                            <NavLogo />
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <h1 className="text-2xl font-bold text-blue-900">
                                {user ? user.name : ''}
                            </h1>
                            <div className='hidden sm:block'>
                                <Categories />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center sm:items-center gap-4 sm:order-2 order-1">
                        <div className='hidden sm:block'>
                            <SearchBox />
                        </div>
                        <div className='flex justify-between items-center '>
                            <div>
                                <Navbar />
                            </div>

                            <div className='sm:hidden'>
                                <Categories />
                            </div>
                            <div className='sm:hidden'>
                                <NavLogo />
                            </div>
                        </div>
                        <hr className='sm:hidden mb-3' />
                    </div>

                    <div className="ml-8 flex flex-wrap justify-center items-center gap-8 sm:order-3 order-3">
                        <div>
                            <NavLogin />
                        </div>
                        <div>
                            <NavCart />
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavbarView;
