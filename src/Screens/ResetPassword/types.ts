export interface UserPassword {
    email: string;
}

export interface User {
    email: string;
    changeError: Function;
    check_email: Function;
}

export type NavigationType = {
    navigation: {
        navigate: Function,
        goBack: Function
    };
};