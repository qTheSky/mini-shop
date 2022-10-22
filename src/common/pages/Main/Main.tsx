import React from 'react';
import {Container, Grid} from '@mui/material';
import {items} from 'data/Items';
import {CardItem} from 'common/components/Card/CardItem';

export const Main = () => {
		return (
				<Container>
						<Grid container spacing={3} alignItems="stretch">
								{items.map(item => <CardItem name={item.name}
								                             id={item.id}
								                             description={item.description}
								                             imageUrl={item.imageUrl}
								                             price={item.price}
								                             key={item.id}
								/>)}
						</Grid>
				</Container>
		);
};
