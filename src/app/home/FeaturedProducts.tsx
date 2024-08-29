"use client";
import React from 'react';
import Image from 'next/image';
import AddToCart from '@/components/addToCart/AddToCart';
import IProduct from '@/interfaces/products';

const FeaturedProducts: React.FC<{ products: IProduct[] }> = ({ products }) => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1 w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full object-center"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
                            <p className="text-xs text-gray-600">${product.price.toFixed(2)}</p>

                            <AddToCart
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                stock={product.stock}
                                image={product.image}
                                categoryId={product.categoryId}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
