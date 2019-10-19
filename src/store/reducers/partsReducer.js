import {
    SUCCESS_ADD_PART,
} from '../actions/actionTypes';
const initialState = {
    parts: [],
    contracts: [],
}

const partsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_ADD_PART:
                return { ...state };
        default:
                return { ...state };
    }
}

export default partsReducer;