import {AppRootStateType} from "../../app/store";

export const getCartItems = (state: AppRootStateType) => state.cart.items
export const getTotalPrice = (state: AppRootStateType) => state.cart.totalPrice
export const getCartItemById = (id: string) => (state: AppRootStateType) => state.cart.items.find(item => item.id === id)