import { ILogin } from "@/interfaces/login";
import { IRegister } from "@/interfaces/register";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const register = async function (data: IRegister) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            if (errorData.message === 'User already exists') {
                throw new Error('This email is already registered. Please use a different email.');
            }
            throw new Error(errorData.message || 'Registration failed');
        }

        const user = await res.json();
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}

export const login = async function (data: ILogin) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const user = await res.json();
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}