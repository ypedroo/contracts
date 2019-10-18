import { ADD_PART } from './actionTypes'

export const handleSubmit = content => ({
    type: ADD_PART,
    payload: {
        content
    }
});