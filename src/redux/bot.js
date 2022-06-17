import { createSlice } from "@reduxjs/toolkit";

export const botSlice = createSlice({
    name: 'bot',
    initialState: {
        botSongs: [],
    },
    reducers: {
        addSongs: (state, action) => {
            state.botSongs = action.payload;
        },
    },
});

export const { addSongs } = botSlice.actions;
 
export default botSlice.reducer;