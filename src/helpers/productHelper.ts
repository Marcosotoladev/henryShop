import IProduct from "@/interfaces/products";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<IProduct[]> {
    try {
        const res = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200 }
        })
        const products: IProduct[] = await res.json();
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
};

export async function getProductByID(id: string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProducts();
        const productFiltered = products.find((product) => product.id.toString() === id)
        if (!productFiltered) throw new Error('Product not found')
        return productFiltered;
    } catch (error: any) {
        throw new Error(error);
    }
};

export async function getProductsByCategory(category: string): Promise<IProduct[]> {
    try {
        const products: IProduct[] = await getProducts();
        const productFiltered = products.filter((product) => product.categoryId === Number(category))
        if (!productFiltered) throw new Error('Product not found')
        return productFiltered;
    } catch (error: any) {
        throw new Error(error);
    }
};

export async function getProductByName(name: string): Promise<IProduct[]> {
    try {
        const products: IProduct[] = await getProducts();
        const lowercasedName = name.toLowerCase();
        const productFiltered = products.filter((product) =>
            product.name.toLowerCase().includes(lowercasedName)
        );
        return productFiltered;
    } catch (error: any) {
        console.error('Error in getProductByName:', error);
        throw new Error(error.message);
    }
};

