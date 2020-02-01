import { combineReducers } from "redux";
import partsReducer from "./partsReducer";

const reducers:any = {
    partsReducer,
}
const reducer = combineReducers(reducers);

export default reducer;
