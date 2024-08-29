"use client"

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import IProduct from '../../interfaces/products';
import { toast, ToastContainer } from 'react-toastify';

const AddToCart: React.FC<IProduct> = ({ id, name, description, price, stock, image, categoryId }) => {
    const { user } = useAuth();
    const router = useRouter();

    const handleClick = () => {
        if (!user) {
            toast.error('Please login to add products to cart', { position: 'top-center', autoClose: 2000 });
            setTimeout(() => {
                router.push('/login');
            }, 2100);  
        } else {
            let cart: IProduct[] = [];
            try {
                cart = JSON.parse(localStorage.getItem('cart') || '[]');
            } catch (e) {
                console.error("Error parsing cart data from localStorage", e);
            }

            const productExist = cart.some((product: IProduct) => product.id === id);

            if (productExist) {
                toast.warn('Product already in cart', { position: 'top-center', autoClose: 2000 });
            } else {
                cart.push({ id, name, description, price, stock, image, categoryId });
                localStorage.setItem('cart', JSON.stringify(cart));
                toast.success('Product added to cart', { position: 'top-center', autoClose: 2000 });
                setTimeout(() => {
                router.push('/products');
                },2100);
            }
        }
    };

    return (
        <div className='flex justify-start'>
            <ToastContainer />
            <button
                onClick={handleClick}
                className="mt-6 mb-6 bg-blue-600 text-white text-lg px-3 py-1 rounded hover:bg-blue-800"
                aria-label="Add to Cart"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;



