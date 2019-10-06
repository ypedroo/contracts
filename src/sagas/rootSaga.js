import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PART, SUCCESS_ADD_PART, FAIL_ADD_PART } from '../actions/actionTypes';
import Api from '...'


function* postPart(action) {
    try {
        const user = axios({
            method: 'post',
            url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
            headers: {}, 
            data: {
              foo: 'bar', // This is the body part
            }
          });
        yield put({ type: SUCCESS_ADD_PART, user: user });
    } catch (e) {
        yield put({ type: FAIL_ADD_PART, message: e.message });
    }
}

function* rootSaga() {
    yield takeEvery(ADD_PART, postPart);
}

export default rootSaga;