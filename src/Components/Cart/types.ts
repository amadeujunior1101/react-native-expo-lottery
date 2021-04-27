
export interface CartProp {
    type: string;
    price: number;
    game_id?: number;
    date: string;
    numbers: Array<String>;
    color: string;
}

export interface ItemCart {
    type: string;
    price: number;
    numbers: Array<String>;
    color: string;
    date: string;
}
export interface ArrayObjects {
    cart: Array<ItemCart>;
};