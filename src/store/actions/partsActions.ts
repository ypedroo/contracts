import { ADD_PART } from './actionTypes'

export const submitForm = (content:any) => {
    console.log('hi actions')
    return {
        type: ADD_PART,
        payload: {
            content
        }
    }
}