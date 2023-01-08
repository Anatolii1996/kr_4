import {takeEvery, put, call} from "redux-saga/effects"
import  getPosts  from "../../api"
import { GET_POSTS } from "../constants";
import {setPosts} from "../action/actionCreator"

export function* workerSaga() {
    const data = yield call(getPosts) ;
   
    yield put(setPosts(data));
}

export function* watchClickSaga() {
    yield takeEvery(GET_POSTS, workerSaga)
}

export default function* rootSaga() {

    yield watchClickSaga();
}