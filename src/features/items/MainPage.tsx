import React, {useEffect} from 'react';
import {Container, Grid} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'app/store';
import {CardItem} from 'features/items/CardItem';
import {fetchItems} from 'features/items/items-reducer';
import {CardSkeleton} from "./CardSkeleton";
import {getCartItems} from "../cart/selectors";
import {getItems, getItemsStatus} from "./selector";


export const MainPage = () => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(getCartItems)
    const items = useAppSelector(getItems)
    const itemsStatus = useAppSelector(getItemsStatus)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    return (
        <div style={{padding: '25px'}}>
            <Container>
                <Grid container spacing={3} alignItems="start">
                    {itemsStatus === 'loading'
                        ? Array.from(new Array(6)).map((fake, index) => <CardSkeleton key={index}/>)
                        : items.map(item => (<CardItem item={item} key={item.id}/>))
                    }
                </Grid>
            </Container>
        </div>
    )
}
