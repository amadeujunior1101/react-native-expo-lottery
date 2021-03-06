export interface GameType {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
    func: Function
    active: number;
}

export interface Cart {
    type: string;
    price: number;
    game_id?: number;
    date: string;
    numbers: Array<String>;
    color: string;
}
export interface Item {
    id: number;
    type: string;
    color: string;
    description: string;
    max_number: number;
    range: number;
    price: number;
    min_cart_value: number;
}

export interface NavigationType {
    navigation: {
        openDrawer: Function,
        toggleDrawer: Function
    }
    state: boolean
}

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