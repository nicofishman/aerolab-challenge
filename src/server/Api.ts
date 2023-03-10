import { Product, User } from '../types';

export const getMe = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/me`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        }
    );
    const data = (await response.json()) as User;

    return data;
};

export const addPoints = async (points: number) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/points`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: points }),
        }
    );
    const data = (await response.json()) as {
        message: string;
        'new Points': number;
    };

    return data;
};

export const getProducts = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        }
    );
    const data = (await response.json()) as Product[];

    return data;
};

export const redeemProduct = async (productId: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/redeem`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            productId,
        }),
    });

    if (!response.ok) {
        const json = (await response.json()) as { error: string };

        const data = {
            status: response.status,
            message: json.error,
        } as { status: number; message: string };

        return data;
    }

    const data = {
        status: response.status,
        ...(await response.json()),
    } as {
        status: number;
        message: string;
    };

    return data;
};
