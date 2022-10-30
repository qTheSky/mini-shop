import React from 'react';
import {Header} from 'common/components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from 'features/items/MainPage';
import {Cart} from 'features/cart/Cart';

export const App = () => {
		return (
				<>
						<Header/>
						<Routes>
								<Route index path="/" element={<MainPage/>}/>
								<Route path="/cart" element={<Cart/>}/>
						</Routes>
				</>
		)
}

