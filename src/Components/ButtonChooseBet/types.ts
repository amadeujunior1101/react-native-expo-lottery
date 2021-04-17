export interface Item {
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
}

export interface Props {
    item: Item;
    id: string;
    func: Function
    active: number;
}