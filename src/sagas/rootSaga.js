import { put, takeEvery } from 'redux-saga/effects';
import { ADD_PART, SUCCESS_ADD_PART, FAIL_ADD_PART } from '../actions/actionTypes';
import Axios from 'axios';

function* postPart(action) {
    try {
        const user = Axios({
            method: 'post',
            url: 'http://localhost:3000/parts',
            headers: {},
            data: {
                name: action.payload.name,
                lastName: action.payload.lastName,
                cpf: action.payload.cpf,
                email: action.payload.email,
                phone: action.payload.phone,
            }
        });
        yield put({ type: SUCCESS_ADD_PART, user: user });
    } catch (e) {
        yield put({ type: FAIL_ADD_PART, message: e.message });
    }
}

function* rootSaga() {
    yield takeEvery('ADD_PART', postPart);
}

export default rootSaga;