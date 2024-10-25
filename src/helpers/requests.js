import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getVideos = createAsyncThunk(
    'video/getVideos',
    async () => {
        return await axios("http://localhost:8080/api/videos", { method: "GET" }).then(res => res.data.content);
    },
  )