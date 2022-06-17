import { createSlice } from "@reduxjs/toolkit";

export const likedSlice = createSlice({
    name: 'liked',
    initialState: {
        likedSongs: [],
    },
    reducers: {
        addSongs: (state, action) => {
            action.payload.map((ele) => {
                state.likedSongs.push(ele);
            });
            console.log(state.likedSongs);
        },
    },
});

export const { addSongs } = likedSlice.actions;
 
export default likedSlice.reducer;