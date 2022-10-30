import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const EmptyCart = () => {
    return (
        <div style={{marginTop: '10%', textAlign: 'center'}}>
            <h1>Корзина пустая, добавьте товары и
                возвращайтесь
                сюда :)</h1>
            <Link to='/'>
                <Button variant='contained'>Вернуться на главную</Button>
            </Link>
        </div>
    );
};
