import {configureStore} from '@reduxjs/toolkit'
import guidesReducer from './features/GuidesSlice'
import authReducer from './features/AuthSlice' 
import productsReducer from './features/ProductSlice'

const myStore = configureStore({
    reducer:{
       guidesReducer,
       authReducer,
       productsReducer
    }
})

export default myStore;