import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {backendApi} from "./backendApi";
import {appVariablesReducer} from "./slices/appVariables";
import {geocodingApi} from "./geocodingApi";

const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        [geocodingApi.reducerPath]: geocodingApi.reducer,
        appVariablesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(backendApi.middleware)
        .concat(geocodingApi.middleware)
})

setupListeners(store.dispatch)

export default store