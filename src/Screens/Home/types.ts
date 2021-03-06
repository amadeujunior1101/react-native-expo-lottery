export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
    id: string;
    func: Function
    active: number;
}
export interface GameResults {
    type: string;
    color: string;
    numbers: string;
    date: string;
    price: number;
}

export interface TypeColorProps {
    color: string
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
    numbers: Array<String>;
    color: string;
    date: string;
}
export interface ArrayObjects {
    cart: Array<ItemCart>;
};