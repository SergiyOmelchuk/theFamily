import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import landingReducer from "./Landing-reducer";

let reducers = combineReducers({
    landingPage: landingReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;