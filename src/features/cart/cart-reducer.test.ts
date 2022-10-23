import {addItemToCart, cartReducer, minusItem} from "./cart-reducer";
import {ItemType} from "../../data/Items";

let startState: ReturnType<typeof cartReducer>
const item: ItemType = {name: 'name', id: '1', description: 'description', imageUrl: 'some url', price: 100}

beforeEach(() => {
    startState = {
        items: [
            {
                name: 'cartItemName',
                count: 1,
                description: 'cartItemDescription',
                imageUrl: 'cartItemImageUrl',
                price: 100,
                id: '0'
            }
        ],
        totalPrice: 100
    }
})

test('item should be added into cart', () => {
    const endState = cartReducer(startState, addItemToCart(item))
    expect(endState.items.length).toBe(2)
    expect(endState.totalPrice).toBe(200)
    expect(endState.items[1].name).toBe('name')
})
test('item should be removed from cart', () => {
    const endState = cartReducer(startState, minusItem(startState.items[0].id))
    expect(endState.items.length).toBe(0)
    expect(endState.totalPrice).toBe(0)
})