
const APIURL  = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: string[], token: string) => {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({ products })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const order = await response.json();
        return order;
    } catch (error: any) {
        console.error('Error in createOrder:', error);
        throw new Error(error.message || 'Failed to create order');
    }
};




export const getOrders = async (token: string) => {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },

        });
        const orders = await response.json();
        return orders;
    } catch (error: any) {
        throw new Error(error);
    }
};
