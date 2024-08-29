import React from 'react';
import Link from 'next/link';
import IProduct from '../../../interfaces/products';
import AddToCart from '@/components/addToCart/AddToCart';

const CardProducts: React.FC<IProduct> = ({ id, name, description, price, stock, image, categoryId }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-200">
            <Link href={`/products/${id}`} className='w-64'>
                <div className="h-48 flex items-center justify-center overflow-hidden">
                    <img className="w-30 h-full object-cover object-center" src={image} alt={name} />
                </div>
                <div className="px-6 py-1 flex-grow">
                    <div className="font-bold text-xl text-center">{name}</div>
                </div>
                <div className="px-6 pt-2 pb-2 flex flex-col ">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-bold text-gray-800 mr-2 mb-2">
                        Precio: ${price}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Stock: {stock}
                    </span>
                </div>
            </Link>
            <div className='flex justify-start ml-8'>
                <AddToCart
                    id={id}
                    name={name}
                    description={description}
                    price={price}
                    stock={stock}
                    image={image}
                    categoryId={categoryId} 
                />
            </div>
        </div>
    );
};

export default CardProducts;
