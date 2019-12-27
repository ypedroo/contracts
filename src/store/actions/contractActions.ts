import { ADD_CONTRACT } from './actionTypes'

export const submitContract = (content:Object) => {
    return {
        type: ADD_CONTRACT,
        payload: {
            content
        }
    }
}