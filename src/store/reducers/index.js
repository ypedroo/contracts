import { combineReducers } from "redux";
import partsReducer from "./partsReducer";
import { reducer as formReducer } from 'redux-form';
import { SUCCESS_ADD_PART, FAIL_ADD_PART } from '../actions/actionTypes';

const reducers = {
    partsReducer,
    form: formReducer.plugin({
        partForm: (state, action) => {
            switch (action.type) {
                case SUCCESS_ADD_PART:
                    return { ...state, error: true };
                case FAIL_ADD_PART:
                    return {...state, error: false};
                default:
                    return state;
            }
        }
    })
}
const reducer = combineReducers(reducers);

export default reducer;
