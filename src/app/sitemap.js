import { BASE_URL } from "./lib/constans"

export const generateSitemap = async () => {
    return [
        {id: 0}, {id: 1}, {id: 2}
    ]

}

export const sitemap = async ({id}) => {
const start = id * 50000;
const end = (id + 1) * 50000;

const products = await getProducts(
    `SELECT * FROM products WHERE id BETWEEN ${start} AND  ${end}`
);

return products.map((product) => {
    return {
        url: `${BASE_URL}product/${id}`,
        lastModify: product.date,
        changefreq: 'monthly',
        priority: 0.8
    }
})
}