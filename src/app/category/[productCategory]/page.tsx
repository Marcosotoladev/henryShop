import { getProductsByCategory } from '../../../helpers/productHelper'
import Link from 'next/link'
import CardProducts from '../../../components/cards/cardProducts/CardProducts'

const productsCategory = async ({ params }: { params: { productCategory: string } }) => {

    const products = await getProductsByCategory(params.productCategory)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <CardProducts key={product.id} {...product} />
                ))}
            </div>
            <div className="flex justify-center items-center m-8">
                <Link href="/products"
                    className="inline-block bg-blue-900 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
                    Back to All Products
                </Link>
            </div>
        </div>
    )
}

export default productsCategory