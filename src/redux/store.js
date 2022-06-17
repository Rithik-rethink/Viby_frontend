import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./track";

export default configureStore({
    reducer: {
        track: trackSlice,
    },
    devTools: true,
});