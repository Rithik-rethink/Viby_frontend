import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./track";
import botSlice from './bot';
import likedSlice from "./liked";

export default configureStore({
    reducer: {
        track: trackSlice,
        bot: botSlice,
        liked: likedSlice,
    },
    devTools: true,
});