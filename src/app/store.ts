import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {cartReducer} from 'features/cart/cart-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {itemsReducer} from 'features/items/items-reducer';

export const rootReducer = combineReducers({
		cart: cartReducer,
		items: itemsReducer,
})

export const store = configureStore({
		reducer: rootReducer
})

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// @ts-ignore
window.store = store

