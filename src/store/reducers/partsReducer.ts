import {
    SUCCESS_ADD_PART, 
    FAIL_ADD_PART,
    RESET_ADD_PART,
} from '../actions/actionTypes';

const initialState = {
    reqSuccess: undefined,
}

const partsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SUCCESS_ADD_PART:
                return {...state, reqSuccess: true};
        case FAIL_ADD_PART:
                return {...state, reqSuccess: false};
        case RESET_ADD_PART:
                return {...state, reqSuccess: undefined};
        default:
                return {...state};
    }
}

export default partsReducer;