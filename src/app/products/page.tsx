import React from 'react'
import CardList from '@/components/cards/cardList/CardList'
import { ToastContainer } from 'react-toastify'

const Products = () => {


    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
                <h1 className="text-3xl font-bold mb-6">Products</h1>
                <ToastContainer />
                <CardList />
            </main>
        </div>
    )
}

export default Products