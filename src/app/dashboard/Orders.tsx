// src/components/Orders.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { getOrders } from '../../helpers/ordersHelper';
import { useAuth } from '../../context/AuthContext';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    categoryId: number;
}

interface Order {
    id: number;
    status: string;
    date: string;
    products: Product[];
}

const Orders: React.FC = () => {
    const { token } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            if (token) {
                try {
                    const orders = await getOrders(token);
                    setOrders(orders);
                } catch (error) {
                    console.error('Error fetching orders:', error);
                }
            }
        };

        fetchOrders();
    }, [token]);

    if (orders.length === 0) {
        return <div className=" text-center h-96">No orders found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Orders</h2>
            <ul className="space-y-6">
                {orders.map((order) => {
                    const total = order.products.reduce((acc, product) => acc + product.price, 0);

                    return (
                        <li key={order.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
                            <div className='flex justify-around'>
                            <p className="text-xl font-semibold mb-2">Order ID: {order.id}</p>
                            <p className="text-gray-600"><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                            <p className="text-gray-600 mb-4"><strong>Status:</strong> {order.status}</p>
                            </div>
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="p-3 text-left text-gray-700">Image</th>
                                        <th className="p-3 text-left text-gray-700">Name</th>
                                        <th className="p-3 text-left text-gray-700">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products.map((product) => (
                                        <tr key={product.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="p-3 text-gray-800">{product.name}</td>
                                            <td className="p-3 text-gray-800">${product.price.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-center font-semibold mt-4 text-gray-900">
                                <strong>Total:</strong> ${total.toFixed(2)}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Orders;







