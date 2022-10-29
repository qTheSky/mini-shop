import React, {useEffect} from 'react';
import {Container, Grid} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'app/store';
import {CardItem} from 'features/items/CardItem';
import {fetchItems} from 'features/items/items-reducer';


export const Main = () => {
		const dispatch = useAppDispatch()
		const cartItems = useAppSelector(state => state.cart.items)
		const items = useAppSelector(state => state.items.items)

		useEffect(() => {
				localStorage.setItem('cart', JSON.stringify(cartItems))
		}, [cartItems])

		useEffect(() => {
				dispatch(fetchItems())
		}, [])

		return (
				<div style={{padding: '25px'}}>
						<Container>
								<Grid container spacing={3} alignItems="stretch">
										{items.map((item: any) => (
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
		)
}
