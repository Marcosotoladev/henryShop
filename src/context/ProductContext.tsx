// context/ProductContext.tsx
"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

interface ProductContextType {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
    getProductsByCategory: (categoryId: number) => IProduct[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getProductsByCategory = (categoryId: number) => {
        return products.filter(product => product.categoryId === categoryId);
    };

    return (
        <ProductContext.Provider value={{ products, isLoading, error, getProductsByCategory }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};