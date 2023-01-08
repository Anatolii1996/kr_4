import {takeEvery} from "redux-saga/effects"
import  getPosts  from "../../api"
import { GET_POSTS } from "../constants";

export function* workerSaga() {
    const data = yield getPosts();
    console.log(data);
}

export function* watchClickSaga() {
    yield takeEvery(GET_POSTS, workerSaga)
}

export default function* rootSaga() {

    yield watchClickSaga();
}