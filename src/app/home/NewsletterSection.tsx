import React from 'react';

const NewsletterSection: React.FC = () => {
    return (
        <section className="bg-blue-600 py-16 mb-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-white mb-8">Receive the latest offers and news directly in your inbox.</p>
                <form className="max-w-md mx-auto">
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-r-md hover:bg-yellow-300 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
