export interface UserLogin {
    email: string;
    password: string;
}

export interface User {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

export type NavigationType = {
    navigation: { navigate: Function }
};