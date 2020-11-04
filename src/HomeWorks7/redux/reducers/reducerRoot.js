import { combineReducers } from 'redux';
import gistReducer from './reducerGists';
import gistFilesReducer from "./reducerFiles";

export default combineReducers({
    gists: gistReducer,
    files: gistFilesReducer,
})