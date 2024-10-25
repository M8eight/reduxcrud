import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./slices/videoSlice";

export default configureStore({
    reducer: {
        video: videoSlice
    }
});