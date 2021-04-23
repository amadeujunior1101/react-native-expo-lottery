export interface Item {
    id: number;
    name: string;
    quantity: number;
    price: number;
};

export interface ItemCart {
    type: string;
    price: number;
    game_id: number;
    numbers: Array<String>;
    color: string;
    date: string;
}

export interface ArrayObjects {
    cart: Array<ItemCart>;
};

export interface Action {
    type: string;
    payload: ArrayObjects
};

export interface ActionNumber {
    type: string;
    payload: number
};




