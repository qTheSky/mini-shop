import React from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {useFormik} from "formik";
import {useAppSelector} from "../../app/store";

export const OrderForm = () => {
    const cartItems = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phoneNumber: '',
        },
        onSubmit: formData => {
            console.log({formData, cartItems, totalPrice})
        },
    });
    return (
        <Paper style={{padding: '20px 10px', width: '30%', height: '470px'}}>
            <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <TextField {...formik.getFieldProps('name')}
                           label='Имя'
                           size='small'
                           fullWidth/>
                <TextField {...formik.getFieldProps('surname')}
                           label='Фамилия'
                           size='small'
                           fullWidth/>
                <TextField {...formik.getFieldProps('address')}
                           label='Адресс'
                           size='small'
                           fullWidth/>
                <TextField {...formik.getFieldProps('phoneNumber')}
                           label='Номер телефона'
                           size='small'
                           fullWidth/>
                <Button style={{marginTop: '150px'}}
                        fullWidth
                        variant='contained'
                        type='submit'>
                    Сделать заказ
                </Button>
            </form>
        </Paper>
    )
}
