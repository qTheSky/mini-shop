import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {useAppDispatch, useAppSelector} from 'app/store';
import {addItemToCart, minusItem} from 'features/cart/cart-reducer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";

interface IProps {
    imageUrl: string
    name: string
    price: number
    description: string
    id: string
}

export const CardItem = ({imageUrl, name, price, description, id}: IProps) => {
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector(state => state.cart.items.find(cartItem => cartItem.id === id))

    const addedCount = cartItem ? cartItem.count : 0
    const addItemHandle = () => {
        const item = {imageUrl, name, price, description, id}
        dispatch(addItemToCart(item))
    }
    const minusItemHandle = () => {
        dispatch(minusItem(id))
    }
    return (
        <Grid item xs>
            <Card sx={{width: 320}}>
                <CardMedia component="img"
                           image={imageUrl}
                           alt="card image"
                           sx={{height: 200, objectFit: 'contain'}}
                />
                <CardContent>
                    <div>
                        <h2>{name}</h2>
                    </div>
                    <div>
                        {description}
                    </div>
                    <h4>{price}$</h4>
                </CardContent>
                <CardActions>
                    {addedCount
                        ? <div style={{display: 'flex', alignItems: 'center'}}>
                            <Link to='/cart'><Button variant='contained' color='success'>В корзине</Button></Link>
                            <IconButton onClick={addItemHandle}><AddCircleOutlineOutlinedIcon/></IconButton>
                            <span>{addedCount}</span>
                            <IconButton onClick={minusItemHandle}><RemoveCircleOutlineOutlinedIcon/></IconButton>
                        </div>
                        : <Button onClick={addItemHandle} fullWidth>
                            <ShoppingCartOutlinedIcon/>
                            В корзину
                        </Button>

                    }
                </CardActions>
            </Card>
        </Grid>
    );
};
