import {addItemToCart, cartReducer, clearCart, minusItem} from './cart-reducer';
import {ItemType} from 'features/items/items-reducer';

let startState: ReturnType<typeof cartReducer>
const item: ItemType = {name: 'name', id: '3', description: 'description', imageUrl: 'some url', price: 100}

beforeEach(() => {
    startState = {
        items: [
            {
                name: 'cartItemName',
                count: 1,
                description: 'cartItemDescription',
                imageUrl: 'cartItemImageUrl',
                price: 100,
                id: '1'
            },
            {
                name: 'cartItemName2',
                count: 2,
                description: 'cartItemDescription2',
                imageUrl: 'cartItemImageUrl2',
                price: 200,
                id: '2'
            },
        ],
        totalPrice: 100
    }
})

test('item should be added into cart', () => {
    const endState = cartReducer(startState, addItemToCart(item))
    expect(endState.items.length).toBe(3)
    expect(endState.totalPrice).toBe(600)
    expect(endState.items[2].name).toBe('name')
})
test('item should be removed from cart', () => {
    const endState = cartReducer(startState, minusItem(startState.items[0].id))
    expect(endState.items.length).toBe(1)
    expect(endState.totalPrice).toBe(400)
})
test('cart should be clear after dispatch clearCartItems', () => {
    const endState = cartReducer(startState, clearCart())
    expect(endState.items.length).toBe(0)
    expect(endState.totalPrice).toBe(0)
})