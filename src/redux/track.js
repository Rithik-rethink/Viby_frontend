import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: 'track',
    initialState: {
        track_name: '',
        track_artist: '',
        track_url: '',
        track_cover: '',
        track_spotify: '',
        audio: new Audio(),
        isPlaying: false,
    },
    reducers: {
        handleChange: (state, action) => {
            state.track_name = action.payload.album_name;
            state.track_artist = action.payload.artist_name;
            state.track_cover = action.payload.album_cover;
            state.track_url = action.payload.preview_link;
            state.track_spotify = action.payload.spotify_link;
        },
    },
});

export const { handleChange } = trackSlice.actions;
 
export default trackSlice.reducer;