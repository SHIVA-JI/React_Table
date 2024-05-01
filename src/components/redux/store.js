import { configureStore } from "@reduxjs/toolkit";
import headingSlice from "./headingSlice";
import { combineReducers } from "@reduxjs/toolkit";
import sidebarSlice from './sidebarSlice';

const rootReducer = combineReducers({
    pageTitle: headingSlice,
    sidebar: sidebarSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

