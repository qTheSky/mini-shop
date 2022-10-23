import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ItemType} from 'data/Items';
import {calculateTotalPrice} from 'utils/calculateTotalPrice';
import {getCartFromLS} from "../../utils/getCartFromLS ";


const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLS(),
    reducers: {
        addItemToCart(state, action: PayloadAction<ItemType>) {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }
            state.totalPrice = calculateTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(item => item.id === action.payload)
            if (findItem) {
                findItem.count === 1
                    ? state.items = state.items.filter(item => item.id !== action.payload)
                    : findItem.count--
                state.totalPrice = calculateTotalPrice(state.items)
            }
        }
    },
})

export const {addItemToCart, minusItem} = cartSlice.actions
export const cartReducer = cartSlice.reducer

export type CartItemType = ItemType & {
    count: number
}