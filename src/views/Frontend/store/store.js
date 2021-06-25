import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger'
//import ................

const store = configureStore({
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger),
    reducer: {}

})

export default store;