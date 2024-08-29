'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';  
import { getProductByName } from '@/helpers/productHelper';
import IProduct from '@/interfaces/products';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<IProduct[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const products = await getProductByName(searchTerm);
            setResults(products);
            setIsDropdownOpen(true); 
        } catch (error: any) {
            console.error('Error in handleSearch:', error);
            alert(error.message);
        }
    };

    const handleResultClick = (id: string) => {
        router.push(`/products/${id}`);
        setIsDropdownOpen(false);
        setSearchTerm('');
    };

    return (
        <div ref={wrapperRef} className="relative border-gray-700">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row ">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products"
                    className="max-w-44 text-sm border-2 text-gray-600 px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="text-sm bg-gray-900 border-2 border-transparent hover:border-gray-300 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
                >
                    Search
                </button>
            </form>
            {isDropdownOpen && results.length > 0 && (
                <div className="absolute z-30 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    <ul>
                        {results.map(product => (
                            <li
                                key={product.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleResultClick(product.id.toString())}
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {isDropdownOpen && results.length === 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <p className="px-4 py-2">No products found</p>
                </div>
            )}
        </div>
    );
};

export default SearchBox;

