import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import productReducer from './productSlice';

// 1. create reducers
const rootReducer = combineReducers({
    counter:counterReducer,
    products:productReducer,
})

// 2. create store
const store = configureStore({
    reducer:rootReducer,
});

export default store;