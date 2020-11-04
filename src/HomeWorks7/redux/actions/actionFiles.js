import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGistsUrl = createAsyncThunk('gists/fetchGistsUrl', async ({files}) => {
    const req = files.map(file => fetch(file.raw_url).then(res => res.text()));
    return await Promise.all(req);
},
    {
        condition: ({ gistId }, api) => {
            const {files} = api.getState();
            return !files.data[gistId]
        }
    });

