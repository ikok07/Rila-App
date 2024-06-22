import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {backendApi} from "./backendApi";
import {appVariablesReducer} from "./slices/appVariables";

const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        appVariablesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(backendApi.middleware)
})

setupListeners(store.dispatch)

export default store