import { User } from "../types";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliMjdkODU2NDAxYTAwMjEwZjdjNDQiLCJpYXQiOjE2NzExMTI2NjR9.HSkanOptnbCCg6e6ijriW6ml1ebR0JIJRbmHJ2h6XEI';
const BASE_URL = 'https://private-anon-c6b7f9f057-aerolabchallenge.apiary-proxy.com/';

export const getMe = async () => {
    const response = await fetch(`${BASE_URL}/user/me`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        }
    });
    const data = await response.json() as User;



    return data;
};


export const addPoints = async (points: number) => {
    const response = await fetch(`${BASE_URL}/user/points`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: points })
    });
    const data = await response.json() as {
        message: string; "new Points": number;
    };

    return data;
};