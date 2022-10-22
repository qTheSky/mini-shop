import {CartItemType} from 'features/cart/cart-reducer';

export const calculateTotalPrice = (cartItems: CartItemType[]) => {
		return cartItems.reduce((sum, i) => sum + (i.price * i.count), 0)
}