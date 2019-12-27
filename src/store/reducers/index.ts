import { combineReducers } from "redux";
import partsReducer from "./partsReducer";
import { reducer as formReducer } from 'redux-form';
import { SUCCESS_ADD_PART } from '../actions/actionTypes'

const reducers:any = {
    partsReducer,
    form: formReducer.plugin({
        partForm: (state, action:any) => {
            switch (action.type) {
                case SUCCESS_ADD_PART:
                    return undefined;
                default:
                    return state;
            }
        }
    })
}
const reducer = combineReducers(reducers);

export default reducer;
