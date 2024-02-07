import {configureStore} from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { cryptoDescriptionApi } from '../services/crypto'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoDescriptionApi.reducerPath]: cryptoDescriptionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoNewsApi.middleware, // Make sure to include middleware for both APIs
        cryptoDescriptionApi.middleware,
    )
        
});