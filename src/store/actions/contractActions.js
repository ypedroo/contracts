import { ADD_CONTRACT } from './actionTypes'

export const submitContract = content => {
    return {
        type: ADD_CONTRACT,
        payload: {
            content
        }
    }
}