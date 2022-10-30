import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {useAppDispatch, useAppSelector} from 'app/store';
import {addItemToCart, minusItem} from 'features/cart/cart-reducer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import {ItemType} from "./items-reducer";
import {getCartItemById} from "../cart/selectors";

interface IProps {
    item: ItemType
}

export const CardItem = ({item}: IProps) => {
    const {imageUrl, id, name, description, price} = item
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector(getCartItemById(id))

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
