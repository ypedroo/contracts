import {put, takeEvery} from 'redux-saga/effects';
import {ADD_PART, SUCCESS_ADD_PART, FAIL_ADD_PART} from '../actions/actionTypes';
import Axios from 'axios';

function* postPart(action) {
    try {
        Axios({
            method: 'post',
            url: 'http://localhost:3000/parts',
            headers: {},
            data: {
                name: action.payload.content.name,
                lastName: action.payload.content.lastName,
                cpf: action.payload.content.cpf,
                email: action.payload.content.email,
                phone: action.payload.content.phone,
            }
        });
        yield put({ type: SUCCESS_ADD_PART });
    } catch (e) {
        yield put({ type: FAIL_ADD_PART });
    }
}

function* rootSaga() {
    yield takeEvery(ADD_PART, postPart);
}

export default rootSaga;