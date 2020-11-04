import { createSelector } from "@reduxjs/toolkit";

export const getFiles = createSelector(
    state => state.files.data,
    files => files
);

export const getFilesLoader = createSelector(
    state => state.files.loading,
    loading => loading,
);

export const getFilesById = createSelector(
    getFiles,
    (__, gistId) => gistId,
    (files, gistId) => files[gistId] || []
);