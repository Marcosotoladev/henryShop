import React from 'react';
import Image from 'next/image';

const DealOfTheDay: React.FC = () => {
    return (
        <section className="container mx-auto py-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <Image src="/images/headphone-wireless.png" alt="Deal of the Day" width={500} height={300} className="h-48 w-full object-cover md:h-full md:w-48" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Deal of the Day</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Premium Wireless Headphones</a>
                        <p className="mt-2 text-gray-500">Enjoy exceptional sound with our latest generation wireless headphones.</p>
                        <div className="mt-4">
                            <span className="text-3xl font-bold text-gray-900">$129.99</span>
                            <span className="ml-2 text-sm line-through text-gray-500">$199.99</span>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOfTheDay;
