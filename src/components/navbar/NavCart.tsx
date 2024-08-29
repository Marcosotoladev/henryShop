"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const NavCart: React.FC = () => {
    const [itemCount, setItemCount] = useState<number>(0);

    useEffect(() => {
        const updateItemCount = () => {
            const storedCartItems = localStorage.getItem('cart');
            if (storedCartItems) {
                const parsedCartItems = JSON.parse(storedCartItems);
                setItemCount(parsedCartItems.length);
            }
        };

        updateItemCount(); // Initial load

        // Setup an interval to periodically check the cart (e.g., every second)
        const intervalId = setInterval(updateItemCount, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Link href="/cart" className="relative flex flex-col items-center">
            <ShoppingCart size={52} className="text-black border-2 border-gray-900 p-2 rounded-full" />
            {itemCount >= 0 && (
                <span className="bg-red-700 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mt-1 ml-10">
                    {itemCount}
                </span>
            )}
        </Link>
    );
};

export default NavCart;

