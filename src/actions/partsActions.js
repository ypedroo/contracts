import {ADD_PART} from './actionTypes'

export const submitRegister = content => ({
    type: ADD_PART,
    payload: {
        content
    }
});