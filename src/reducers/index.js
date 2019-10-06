import { combineReducers } from "redux";
import partsReducer from "./partsReducer";
import { reducer as formReducer } from 'redux-form';


export default combineReducers({ partsReducer, formReducer });
