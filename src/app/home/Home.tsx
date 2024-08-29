"use client";

import React from 'react';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import CategoriesSection from './CategoriesSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import ProductCarousel from '@/components/carousel/ProductCarousel';

const Home: React.FC = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Smartphone XYZ',
            price: 599.99,
            image: '/images/smartphone.png',
            stock: 50,
            description: 'A high-end smartphone with a stunning display and excellent performance.',
            categoryId: 1,
        },
        {
            id: 2,
            name: 'Laptop ABC',
            price: 1299.99,
            image: '/images/laptop.png',
            stock: 30,
            description: 'A powerful laptop for professionals, with a sleek design and long battery life.',
            categoryId: 2,
        },
        {
            id: 3,
            name: 'Smartwatch 123',
            price: 249.99,
            image: '/images/smartwatch.png',
            stock: 75,
            description: 'A versatile smartwatch with health tracking and customizable watch faces.',
            categoryId: 3,
        },
        {
            id: 4,
            name: 'Headphones',
            price: 99.99,
            image: '/images/headphone.png',
            stock: 120,
            description: 'Comfortable over-ear headphones with noise cancellation and rich sound quality.',
            categoryId: 4,
        },
        {
            id: 5,
            name: 'Camera',
            price: 799.99,
            image: '/images/camera.png',
            stock: 20,
            description: 'A compact camera with excellent image quality and a variety of shooting modes.',
            categoryId: 5,
        },
    ];

    const categories = [
        { id: 1, name: 'Smartphones', image: '/images/smartphones.png' },
        { id: 2, name: 'Laptops', image: '/images/laptops.png' },
        { id: 3, name: 'Tablets', image: '/images/tablets.png' },
        { id: 4, name: 'Headphones', image: '/images/headphones.png' },
        { id: 5, name: 'Cameras', image: '/images/cameras.png' },
        { id: 6, name: 'Printers', image: '/images/printers.png' },
        { id: 7, name: 'Monitors', image: '/images/monitors.png' },
        { id: 8, name: 'Storage', image: '/images/storage.png' },
        { id: 9, name: 'Accessories', image: '/images/accessories.png' },
        { id: 10, name: 'Gamers', image: '/images/gaming.png' },
    ];

    return (
        <div className="bg-gray-100">
            <HeroSection />
            <FeaturedProducts products={featuredProducts} />
            <CategoriesSection categories={categories} />
            <ProductCarousel />
            <NewsletterSection />
            <Footer />
        </div>
    );
};

export default Home;
