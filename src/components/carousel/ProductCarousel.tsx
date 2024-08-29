"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProducts } from '@/helpers/productHelper';
import IProduct from '@/interfaces/products';

const ProductCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [products]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    if (products.length === 0) {
        return <div>Loading products...</div>;
    }

    return (
        <div className="flex justify-center items-center mb-20 mt-6">
            <div className="relative w-11/12 bg-white rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden rounded-lg">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="flex h-full">
                                <div className="w-1/2 h-full flex items-center justify-center">
                                    <div className="w-full h-64 relative">
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="absolute inset-0 w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 p-4 flex flex-col justify-center m-20">
                                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                                    <p className="text-lg font-semibold">Price: ${product.price}</p>
                                    <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex ? 'bg-gray-600' : 'bg-gray-500 bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;