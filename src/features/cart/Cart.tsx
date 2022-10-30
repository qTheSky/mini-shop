import React, {useEffect} from 'react';
import {Button, Container} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'app/store';
import {clearCart} from 'features/cart/cart-reducer';
import {OrderForm} from "./OrderForm";
import {CartItemsArea} from "./CartItemsArea";
import {EmptyCart} from "./EmptyCart";
import {getCartItems, getTotalPrice} from "./selectors";

export const Cart = () => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(getCartItems)
    const totalPrice = useAppSelector(getTotalPrice)

    const onClickClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart())
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <div style={{padding: '10px'}}>
            <Container>
                {cartItems.length > 0
                    ? <>
                        <div style={{display: 'flex', justifyContent: 'space-between',}}>
                            <CartItemsArea cartItems={cartItems}/>
                            <OrderForm/>
                        </div>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <h2>TOTAL: {totalPrice}$</h2>
                            <Button variant='contained'
                                    color='error'
                                    onClick={onClickClearCart}>
                                Очистить корзину
                            </Button>
                        </div>
                    </>
                    : <EmptyCart/>
                }
            </Container>
        </div>
    );
};
