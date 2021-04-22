export type NavigationType = {
    navigation?: { navigate: Function, push: Function }
};

export interface DrawerNavigation {
    navigation: {
        openDrawer: Function,
        toggleDrawer: Function
    }
}