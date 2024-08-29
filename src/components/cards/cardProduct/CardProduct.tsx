import React from 'react';
import IProduct from '@/interfaces/products';
import categoryNames from './categoryName';
import AddToCart from '../../addToCart/AddToCart';
import { ToastContainer } from 'react-toastify';

const CardProduct: React.FC<IProduct> = ({ id, image, name, description, price, stock, categoryId }) => {

    const categoryName = categoryNames[categoryId] || 'Category not found';

    return (
        <div className="bg-white shadow-xl rounded-lg flex flex-col sm:flex-row">

            <div className="w-full">
                <img
                    className="p-2"
                    src={image}
                    alt={name}
                />
            </div>

            <div className="p-5 sm:px-32 sm:py-4 flex flex-col justify-center">
                <div className='flex justify-between'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        ID: {id}
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Category: </span>
                        <span className="text-gray-900 text-sm font-semibold">{categoryName}</span>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">{name}</h1>
                <p className="mt-4 text-gray-600">{description}</p>
                <div className="mt-6 flex items-center">
                    <span className="text-gray-500 mr-2">Precio:</span>
                    <span className="text-2xl font-bold text-gray-900">${price}</span>
                </div>
                <div className="mt-4 flex items-center">
                    <span className="text-gray-500 mr-2">Stock:</span>
                    <span className="text-lg text-gray-900">{stock} unidades</span>
                </div>
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
            <ToastContainer />
        </div>
    );
};

export default CardProduct;
