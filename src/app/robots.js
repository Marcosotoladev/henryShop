export const robots = () => {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/dashboard/',
            },
            {
                userAgent: 'Yandex',
                allow: '/',
                disallow: '/dashboard/',
            },
            {
                userAgent: ['Bingbot', 'Applebot'],
                allow: '/',
                disallow: '/dashboard/',
            }
        ],
        sitemap: 'https://www.example.com/sitemap.xml'
    }
}

export default robots;