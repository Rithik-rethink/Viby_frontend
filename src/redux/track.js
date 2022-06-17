import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: 'track',
    initialState: {
        track_name: '',
        track_artist: '',
        track_url: '',
        track_cover: '',
        audio: new Audio(),
        isPlaying: false,
    },
    reducers: {
        handleChange: (state, action) => {
            state.track_name = action.payload.album_name;
            state.track_artist = action.payload.artist_name;
            state.track_cover = action.payload.album_cover;
            state.track_url = action.payload.preview_link;
        },
        clickToPlay: (state, action) => {
            state.audio.pause();
            state.audio = new Audio(action.payload);
            state.audio.play();
            state.isPlaying = true;
        },
        clickToPause: (state, action) => {
            state.audio.pause();
            state.isPlaying = false;
        },
        clickToResume: (state, action) => {
            state.audio.play();
            state.isPlaying = true;
        }
    },
});

export const { handleChange, clickToPlay, clickToPause, clickToResume } = trackSlice.actions;
 
export default trackSlice.reducer;