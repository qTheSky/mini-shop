import React from 'react';
import {Container, IconButton} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link, useLocation} from 'react-router-dom';
import {useAppSelector} from 'app/store';
import {getTotalPrice} from "../../../features/cart/selectors";

export const Header = () => {
    const totalPrice = useAppSelector(getTotalPrice)
    const {pathname} = useLocation()
    return (
        <header style={{
            padding: '10px',
            height: '60px',
            backgroundColor: 'white',
            boxShadow: '0px 5px 5px -5px rgba(34, 60, 80, 0.6)'
        }}>
            <Container>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Link to="/">
                        <img style={{height: '40px', width: '40px'}}
                             alt='logo'
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                    </Link>
                    {pathname !== '/cart' && <Link to="/cart">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {!!totalPrice && <div>{totalPrice}$</div>}
                            <IconButton>
                                <ShoppingCartOutlinedIcon/>
                            </IconButton>
                        </div>
                    </Link>}
                </div>
            </Container>
        </header>
    );
};
