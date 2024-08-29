'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center">
                        <p className="text-gray-400 text-sm">
                            Your trusted online store for high-quality products and exceptional service.
                        </p>
                        <Image src="/logo.png" alt="Logo" width={150} height={100} className="cursor-pointer mt-4 rounded p-1 bg-gray-300" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Main Street, City</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@yourstore.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    © Henry Shop. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;