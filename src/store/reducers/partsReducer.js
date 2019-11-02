import {
    SUCCESS_ADD_PART, 
    FAIL_ADD_PART,
} from '../actions/actionTypes';

const initialState = {
    reqSuccess: undefined,
}

const partsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_ADD_PART:
                return {...state, reqSuccess: true};
        case FAIL_ADD_PART:
                return {...state, reqSuccess: false};
        default:
                return {...state};
    }
}

export default partsReducer;