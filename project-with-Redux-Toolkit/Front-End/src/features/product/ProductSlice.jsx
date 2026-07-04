import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state, action) => {
            state.data = action.payload;
         }
    }
});

export const { loadProduct } = productSlice.actions;
export default productSlice.reducer;