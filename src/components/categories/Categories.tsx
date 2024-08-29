"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp, House } from 'lucide-react';
import categories from './CategoriesItems';
import Link from 'next/link';

const Categories: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Categories');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCategoryClick = (categoryId: number, categoryName: string) => {
        setSelectedCategory(categoryName);
        router.push(`/products/category/${categoryId}`);
        setIsOpen(false);
    };

    return (
        <div className="relative " ref={dropdownRef}>
            <button
                className="px-4 py-2 bg-gray-900 text-white text-xs sm:text-md font-semibold rounded-md flex items-center mb-3"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedCategory}</span>
                {isOpen ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
            </button>
            {isOpen && (
                <div className="absolute z-10 w-64 mt-2 bg-white rounded-md shadow-lg">
                    <ul className="py-1">
                    <li>
                            <Link href='/products' onClick={() => {
                                setSelectedCategory('Categories');
                                setIsOpen(false);
                            }}>
                                <div className="px-4 py-2 hover:bg-gray-300 cursor-pointer transition-colors duration-200 flex items-center">
                                    <House size={20} className="mr-2" />
                                    All Categories
                                </div>
                            </Link>
                        </li>
                        <hr />
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className="px-4 py-2 hover:bg-gray-300 cursor-pointer transition-colors duration-200 flex items-center"
                                onClick={() => handleCategoryClick(category.id, category.name)}
                            >
                                <category.icon size={20} className="mr-2" />
                                {category.name}
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Categories;

