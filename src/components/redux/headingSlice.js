import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    title:'Dashboard',
};

export const headingSlice = createSlice ({
    name:'pageTitle',
    initialState ,
    reducers: {
        setPageTitle :(state , action) => {
            state.title = action.payload;
        },
    },
});


export const {setPageTitle} = headingSlice.actions;

export default headingSlice.reducer;