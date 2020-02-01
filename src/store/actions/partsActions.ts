import { ADD_PART, RESET_ADD_PART } from './actionTypes'

export const submitForm = (content:any) => {
    return {
        type: ADD_PART,
        payload: {
            content
        }
    }
}

export const resetSubmission = (content: any) => {
    return {
        type: RESET_ADD_PART,
    }
}