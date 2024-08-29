import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-60">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Henry Shop</h1>
                    <p className="text-xl text-white mb-8">Discover the latest in technology</p>
                    <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        View Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
