export interface UserRegister {
    fullName: string;
    email: string;
    password: string;
}

export interface User {
    fullName: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

export type NavigationType = {
    navigation: { goBack: Function }
};