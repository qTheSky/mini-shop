import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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
						return thunkAPI.rejectWithValue(null)
				}
		})

const itemsSlice = createSlice({
		name: 'items',
		initialState: {
				items: [] as Array<ItemType>,
		},
		reducers: {},
		extraReducers: builder => {
				builder
						.addCase(fetchItems.fulfilled, (state, action) => {
								state.items = action.payload
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