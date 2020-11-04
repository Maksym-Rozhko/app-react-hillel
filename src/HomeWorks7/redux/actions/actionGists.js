import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGists = createAsyncThunk('gists/fetchGists', async () => {
    const data = await fetch('https://api.github.com/gists/public').then(res => res.json());
    return data;
});
