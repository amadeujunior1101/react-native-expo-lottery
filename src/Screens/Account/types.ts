export interface ItemsValidate {
    fullName: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}
export interface User {
    fullName: string;
    email: string;
    password: string;
}

export interface NavigationType {
    navigation: {
        openDrawer: Function,
        toggleDrawer: Function
    }
    state: boolean
}