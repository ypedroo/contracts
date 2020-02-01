import { ADD_PART } from './actionTypes'

export const submitForm = (content:any) => {
    return {
        type: ADD_PART,
        payload: {
            content
        }
    }
}