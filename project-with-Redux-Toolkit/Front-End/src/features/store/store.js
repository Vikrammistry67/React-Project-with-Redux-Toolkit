import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../auth/UserSlice'
import productSlice from '../product/ProductSlice';
import cartSlice from '../cart/CartSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice
    },
});


