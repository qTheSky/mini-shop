import {CartItemType} from "../features/cart/cart-reducer";
import {calculateTotalPrice} from "./calculateTotalPrice";

export const getCartFromLS  = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calculateTotalPrice(items)

    return {
        items: items as CartItemType[],
        totalPrice
    }
}