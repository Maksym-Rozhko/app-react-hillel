import { createReducer } from "@reduxjs/toolkit";
import {fetchGistsUrl} from "../actions/actionFiles";

const initialState = {
    loading: false,
    data: {},
    error: null
};

const gistFilesReducer = createReducer(initialState, {
    [fetchGistsUrl.pending]: (state) => {
        state.loading = true;
        state.error = null
    },
    [fetchGistsUrl.fulfilled]: (state, action) => {
        state.data[action.meta.arg.gistId] = action.meta.arg.files.map((file, index) => ({
                ...file,
                filesScript: action.payload[index]
            }
        ));
        state.loading = false;
    },
    [fetchGistsUrl.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
});

export default gistFilesReducer;


