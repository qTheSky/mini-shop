import {fetchItems, itemsReducer, ItemType} from "./items-reducer";

let startState: ReturnType<typeof itemsReducer>
const fetchedItems: Array<ItemType> = [
    {
        name: 'name',
        id: '1',
        description: 'description',
        imageUrl: 'some url',
        price: 100
    },
    {
        name: 'name2',
        id: '2',
        description: 'description2',
        imageUrl: 'some url2',
        price: 200
    },
]

beforeEach(() => {
    startState = {
        items: [] as Array<ItemType>,
        status: 'idle',
        error: '',
    }
})

test('item should be set to state after fetch', () => {
    const endState = itemsReducer(startState, fetchItems.fulfilled(fetchedItems, 'requestId'))
    expect(endState.items.length).toBe(2)
    expect(endState.items[1].name).toBe('name2')
    expect(endState.error).toBe('')
    expect(endState.status).toBe('idle')
})
