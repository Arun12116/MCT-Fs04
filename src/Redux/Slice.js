import { createSlice } from "@reduxjs/toolkit"
const insitialstate = [];
const ProductReducer = createSlice({
    name: "product",
    ProductDeatiles: insitialstate,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)

        }
    }


})

export const { addToCart } = ProductReducer.actions;
export default ProductReducer.reducer;




