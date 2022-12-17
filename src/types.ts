export type User = {
    _id: string;
    name: string;
    points: number;
    createDate: string;
    redeemHistory: any[];
    __v: number;
}
export type Product = {
    _id: string;
    name: string;
    cost: number;
    category: string;
    img: Img;
}

export type Img = {
    url: string;
    hdUrl: string;
}
