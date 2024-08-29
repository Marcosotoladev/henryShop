import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoriesSection: React.FC<{ categories: { id: number; name: string; image: string }[] }> = ({ categories }) => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Explore by Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {categories.map((category) => (
                        <Link href={`/category/${category.id}`} key={category.id}>
                            <div className="relative group cursor-pointer">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-36 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 rounded-lg flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
