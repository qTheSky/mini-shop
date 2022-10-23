import React, {useEffect} from 'react';
import {Container, Grid} from '@mui/material';
import {items} from 'data/Items';
import {CardItem} from 'common/components/Card/CardItem';
import {useAppSelector} from "../../../app/store";

export const Main = () => {
    const cartItems = useAppSelector(state => state.cart.items)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])
    return (
        <div style={{padding: '25px'}}>
            <Container>
                <Grid container spacing={3} alignItems="stretch">
                    {items.map(item => (
                        <Grid key={item.id} item xs>
                            <CardItem name={item.name}
                                      id={item.id}
                                      description={item.description}
                                      imageUrl={item.imageUrl}
                                      price={item.price}
                            />
                        </Grid>))}
                </Grid>
            </Container>
        </div>
    );
};
