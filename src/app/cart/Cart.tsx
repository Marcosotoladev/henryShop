"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { createOrder } from '../../helpers/ordersHelper';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
}

const Cart: React.FC = () => {
    const router = useRouter();
    const { user, token } = useAuth();
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [checkoutInProgress, setCheckoutInProgress] = useState<boolean>(false);

    useEffect(() => {
        if (!user) {
            toast.error('Please log in to view your cart', { autoClose: 2000, position: 'top-center' });
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } else {
            const storedCartItems = localStorage.getItem('cart');
            if (storedCartItems) {
                const parsedCartItems = JSON.parse(storedCartItems);
                setCartItems(parsedCartItems);
                calculateTotal(parsedCartItems);
            }
        }
    }, [user]);

    const calculateTotal = (items: Product[]) => {
        const total = items.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };

    const handleRemoveItem = (productId: string) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        calculateTotal(updatedCartItems);
    };

    const handleCheckout = async () => {
        try {
            if (!token) {
                throw new Error('No authentication token available');
            }
            const idProducts = cartItems.map(product => product.id);
            await createOrder(idProducts, token);
            setCartItems([]);
            localStorage.setItem('cart', JSON.stringify([]));
            setCheckoutInProgress(true);
            toast.success('Order created successfully', { autoClose: 2000, position: 'top-center' });
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error: any) {
            toast.error('Error during checkout', { autoClose: 2000, position: 'top-center' });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
            {!user ? (
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-xl">Please log in to view your cart</p>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-extrabold text-blue-600 leading-tight tracking-wide mb-6">
                        Your Cart
                    </h1>
                    {cartItems.length > 0 && !checkoutInProgress ? (
                        <div>
                            <table className="min-w-full border-collapse border shadow-lg">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border p-2">Image</th>
                                        <th className="border p-2">Name</th>
                                        <th className="border p-2">Price</th>
                                        <th className="border p-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className="border-t text-center">
                                            <td className="p-2 justify-center flex">
                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                            </td>
                                            <td className="p-2">{item.name}</td>
                                            <td className="p-2">${item.price.toFixed(2)}</td>
                                            <td className="p-2">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-6 flex justify-center items-center gap-8">
                                <p className="text-xl font-semibold">
                                    Total: ${totalPrice.toFixed(2)}
                                </p>
                                <button
                                    onClick={handleCheckout}
                                    className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    ) : (
                        !checkoutInProgress && <p className="text-xl">Your cart is empty</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;








