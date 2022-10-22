import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {useAppDispatch, useAppSelector} from 'app/store';
import {addItemToCart, minusItem} from 'features/cart/cart-reducer';


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
								</CardContent>
								<CardActions>
										<IconButton onClick={addItemHandle}>
												<AddBoxOutlinedIcon/>
										</IconButton>
										{addedCount > 0 && <span>{addedCount}</span>}
										<IconButton onClick={minusItemHandle}>
												<RemoveCircleOutlineOutlinedIcon/>
										</IconButton>
										<div>
												{price}$
										</div>
								</CardActions>
						</Card>
				</Grid>
		);
};
