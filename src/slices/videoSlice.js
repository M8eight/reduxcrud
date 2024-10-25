import {createSlice} from '@reduxjs/toolkit';
import { getVideos } from '../helpers/requests';
import axios from 'axios';

const initialState = {
    videos: [],
    loading: false,
    error: null
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addReport: (state, action) => {
            axios("http://localhost:8080/api/report", { method: "POST", data: action.payload, headers: { "Content-Type": "multipart/form-data" } }).then(res => console.log(res.data));
        }
    },
    extraReducers: builder => {
        builder.addCase(getVideos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.videos = action.payload;
        });
    }
});

export const { addReport } = videoSlice.actions;
export default videoSlice.reducer;