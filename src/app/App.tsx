import React from 'react';
import {Header} from 'common/components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Main} from 'common/pages/Main/Main';
import {Cart} from 'features/cart/Cart';

export const App = () => {
		return (
				<>
						<Header/>
						<Routes>
								<Route index path="/" element={<Main/>}/>
								<Route path="/cart" element={<Cart/>}/>
						</Routes>
				</>
		)
}

