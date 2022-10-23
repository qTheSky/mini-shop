import React from 'react';
import {Button, Container, IconButton, Paper} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'app/store';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {addItemToCart, CartItemType, minusItem} from 'features/cart/cart-reducer';
import {OrderForm} from "./OrderForm";
import {Link} from "react-router-dom";

export const Cart = () => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const minusItemHandle = (id: string) => {
        dispatch(minusItem(id))
    }
    const addItemHandle = (cartItem: CartItemType) => {
        dispatch(addItemToCart(cartItem))
    }
    return (
        <div>
            <Container>
                {cartItems.length > 0
                    ? <>
                        <div style={{display: 'flex', padding: '20px', justifyContent: 'space-between',}}>
                            <div style={{width: '65%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                {cartItems.map(cartItem => (
                                    <Paper sx={{display: 'flex', padding: '5px', justifyContent: 'space-between'}}>
                                        <div style={{display: 'flex', gap: '10px'}}>
                                            <img style={{height: '100px', width: '100px', objectFit: 'contain'}}
                                                 src={cartItem.imageUrl}
                                                 alt="cart item image"/>
                                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                                <h2>{cartItem.name}</h2>
                                                <span>{cartItem.description}</span>
                                                <span>{cartItem.price}$</span>
                                            </div>
                                        </div>
                                        <div style={{width: '100px'}}>
                                            <IconButton onClick={() => minusItemHandle(cartItem.id)}>
                                                <RemoveCircleOutlineOutlinedIcon/>
                                            </IconButton>
                                            {cartItem.count}
                                            <IconButton onClick={() => addItemHandle(cartItem)}>
                                                <AddBoxOutlinedIcon/>
                                            </IconButton>
                                        </div>
                                    </Paper>)
                                )}
                            </div>
                            <OrderForm/>
                        </div>
                        <h2>TOTAL: {totalPrice}$</h2></>
                    : <div style={{marginTop: '10%', textAlign: 'center'}}>
                        <h1>Корзина пустая, добавьте товары и
                            возвращайтесь
                            сюда :)</h1>
                        <Link to='/'>
                            <Button variant='contained'>Вернуться на главную</Button>
                        </Link>
                    </div>
                }
            </Container>
        </div>
    );
};
