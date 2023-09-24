import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState:{
        drarkMode: false,
    },
    reducers:{
        toggleMode: (state)=>{
            state.drarkMode=!state.drarkMode
        }
    },
});

export const themeReducer = themeSlice.reducer;
export const {toggleMode} = themeSlice.actions;