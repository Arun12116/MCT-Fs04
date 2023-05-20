import { configureStore } from "@reduxjs/toolkit"
import { addToCart } from "./Slice";
const Store = configureStore({

    reducer: {

        productDeatiles:addToCart

    }


})

export default Store;