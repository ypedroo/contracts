import { ADD_PART } from './actionTypes'

export const submitForm = (content:Object) => {
    return {
        type: ADD_PART,
        payload: {
            content
        }
    }
}