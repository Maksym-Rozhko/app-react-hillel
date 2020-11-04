import { createSelector } from '@reduxjs/toolkit';

export const getGists = createSelector(
    state => state.gists.data,
    gists => gists,
);

export const getLoader = createSelector(
    state => state.gists.loading,
    loading => loading,
);

export const getSelectedGistById = createSelector(
    getGists,
    (__, gistId) => gistId,
    (gists, gistId) => gists.find(gist => gist.id === gistId)
);


