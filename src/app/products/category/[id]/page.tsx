"use client"

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import CardProducts from '../../../../components/cards/cardProducts/CardProducts';
import { useProducts } from '../../../../context/ProductContext';
import categoryNames from '../../../../components/cards/cardProduct/categoryName';
import { ToastContainer } from 'react-toastify';

const ProductCategory: React.FC = () => {
    const params = useParams();
    const { id } = params;
    const { getProductsByCategory, isLoading, error } = useProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const categoryId = parseInt(id as string, 10);
    const products = getProductsByCategory(categoryId);
    const categoryName = categoryNames[categoryId] || 'Unknown Category';

    if (products.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <ToastContainer />
                <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
                <p className="text-lg mb-4">No products found for this category.</p>
                <div className="flex justify-center items-center m-8">
                    <Link href="/products"
                        className="inline-block bg-blue-900 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
                        Back to All Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
                            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <CardProducts key={product.id} {...product} />
                ))}
            </div>
            <div className="flex justify-center items-center m-8">
                <Link href="/products"
                    className="inline-block bg-blue-900 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
                    Back to All Products
                </Link>
            </div>
        </div>
    );
};

export default ProductCategory;