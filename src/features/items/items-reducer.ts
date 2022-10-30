import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {itemsAPI} from 'api/itemsAPI';

export const fetchItems = createAsyncThunk('items/fetchItems',
    async (_, thunkAPI) => {
        try {
            const querySnapshot = await itemsAPI.getItems()
            const productsArr: Array<ItemType> = []
            querySnapshot.forEach((doc) => {
                productsArr.push({id: doc.id, ...doc.data()} as ItemType)
            })
            return productsArr
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [] as Array<ItemType>,
        status: 'idle' as ItemsStatusesType,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Array<ItemType>>) => {
                state.items = action.payload
                state.status = 'idle'
            })
            .addCase(fetchItems.rejected, (state) => {
                state.status = 'idle'
                state.items = []
            })
    }
})

export const itemsReducer = itemsSlice.reducer

export type ItemType = {
    imageUrl: string
    name: string
    description: string
    price: number
    id: string
}
type ItemsStatusesType = 'loading' | 'idle'