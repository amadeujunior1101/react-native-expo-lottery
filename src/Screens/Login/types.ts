export interface UserLogin {
    email: string;
    password: string;
}

export interface ItemsValidate {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

export type NavigationType = {
    navigation: { navigate: Function }
};