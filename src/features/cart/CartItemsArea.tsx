import React from 'react';
import {IconButton, Paper} from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import {addItemToCart, CartItemType, minusItem} from "./cart-reducer";
import {useAppDispatch} from "../../app/store";


interface IProps {
    cartItems: Array<CartItemType>
}

export const CartItemsArea = ({cartItems}: IProps) => {
    const dispatch = useAppDispatch()
    const minusItemHandle = (id: string) => {
        dispatch(minusItem(id))
    }
    const addItemHandle = (cartItem: CartItemType) => {
        dispatch(addItemToCart(cartItem))
    }
    return (
        <div style={{width: '65%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {cartItems.map(cartItem => (
                <Paper key={cartItem.id} sx={{display: 'flex', padding: '5px', justifyContent: 'space-between'}}>
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
    )
}