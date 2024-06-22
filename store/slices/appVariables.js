import {createSlice} from "@reduxjs/toolkit";
import {Image} from "react-native";

const appVariables = createSlice({
    name: "appVariables",
    initialState: {
        toastMessage: {
            shown: false,
            type: "error",
            text: ""
        },
        userToken: null,
    },
    reducers: {
        setMessage: (state, action) => {
            state.toastMessage.shown = action.payload.shown
            state.toastMessage.type = action.payload.type
            state.toastMessage.text = action.payload.text
        },
        setUserToken: (state, action) => {
            state.userToken = action.payload
        }
    }
})

export const {setMessage, setUserToken} = appVariables.actions
export const appVariablesReducer = appVariables.reducer