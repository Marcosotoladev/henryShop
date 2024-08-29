import React from 'react';
import { getProductByID } from '@/helpers/productHelper';
import DetailProductProps from '@/interfaces/DetailProductProps';
import Link from 'next/link';
import CardProduct from '../../../components/cards/cardProduct/CardProduct';
import { ToastContainer } from 'react-toastify';



const ProductDetail: React.FC<DetailProductProps> = async ({ params }) => {

    const { id } = params;
    const product = await getProductByID(id);

    return (
        <div className="container mx-auto px-4 py-8">
            <ToastContainer />
            <CardProduct {...product} />
            <div className="flex justify-center items-center m-8">
                <Link href="/products"
                    className="inline-block bg-blue-900 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
                    Back to all products
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;



