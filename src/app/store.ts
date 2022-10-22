import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {cartReducer} from 'features/cart/cart-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const rootReducer = combineReducers({
		cart: cartReducer,
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

