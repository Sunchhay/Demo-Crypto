import { call, put, takeLatest } from "redux-saga/effects";
import { getAuthorize } from "../../api/Authorize";
import { getHome } from "../../api/Home";
import { decryptData, decryptedData } from "../../services/crypto";
import { loadLoading, loadMore } from "../actions";
import { loadHomeError, loadHomeSuccess, requestHome } from "../actions/home";

export function* HomeSaga(): any {
    try {
        const response: any = yield call(getHome)
        if (response.message) {
            if (response.data) {
                const plainText: any = yield call(decryptData, response.data)
                yield put(loadHomeSuccess(JSON.parse(plainText)))
            }
            yield put(loadLoading(false))
            yield put(loadMore(false))
        } else {
            yield put(loadHomeError)
            yield put(loadLoading(false))
            yield put(loadMore(false))
        }
    } catch (error) {
        console.log(error)
    }
}

export function* HomeWatchSaga() {
    yield takeLatest(requestHome.type, HomeSaga)
}