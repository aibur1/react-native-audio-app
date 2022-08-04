import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

// 1. create reducers
const rootReducer = combineReducers({
    counter:counterReducer,
})

// 2. create store
const store = configureStore({
    reducer:rootReducer,
});

export default store;