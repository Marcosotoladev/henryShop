import React from 'react';
import Link from 'next/link';

const AboutContainer: React.FC = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-10 m-4 sm:m-10">
            <h1 className="text-3xl font-bold text-center mt-6 mb-6">About Henry Shop</h1>

            <p className="text-lg text-gray-700 mb-6">
                Henry Shops is your trusted destination for all your electronic products. Founded in 2024, we have quickly become leaders in the technology e-commerce market.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
                Our mission is to provide our customers with the best electronic products with exceptional service and competitive prices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li className="mb-2">Wide selection of high-quality products</li>
                <li className="mb-2">Competitive prices</li>
                <li className="mb-2">Fast and secure shipping</li>
                <li className="mb-2">24/7 customer support</li>
                <li>100% satisfaction guarantee</li>
            </ul>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-blue-700">
                    At Henry Shops, we don't just sell technology, we create experiences. Join our community of tech enthusiasts and discover the latest in electronic innovation.
                </p>
            </div>

            <div className="m-8 text-center">
                <Link href="/products" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Explore Products
                </Link>
            </div>
        </div>
    );
};

export default AboutContainer;
