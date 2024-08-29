import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
                <p className="text-gray-500 mt-4 mb-8">Sorry, the page you are looking for does not exist.</p>
                <Link 
                    href="/" 
                    className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

