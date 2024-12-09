import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../reducers"


const reduxStore = configureStore ({
    reducer: mainReducer,
})

export default reduxStore