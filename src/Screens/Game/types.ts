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