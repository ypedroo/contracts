import { ADD_PART } from './actionTypes'

export const submitForm = content => {
    return {
        type: ADD_PART,
        payload: {
            content
        }
    }
}