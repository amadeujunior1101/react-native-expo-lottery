export type NavigationType = {
    navigation?: { navigate: Function, push: Function }
};

export interface DrawerNavigation {
    navigation: {
        openDrawer: Function,
        toggleDrawer: Function
    },
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