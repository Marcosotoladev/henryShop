import React from 'react'
import CardProducts from '../cardProducts/CardProducts'
import { getProducts } from '@/helpers/productHelper'


const CardList = async () => {
    const products = await getProducts();

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {
                        products &&
                        products?.map((product) => {
                            return (
                                    <CardProducts
                                        key={product.id} {...product}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CardList