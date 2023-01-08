import {takeLatest, put, call, select} from "redux-saga/effects"
import  getPosts  from "../../api"
import { GET_POSTS } from "../constants";
import {setPosts} from "../action/actionCreator"

export function* workerSaga() {
    const data = yield call(getPosts) ;
   
    yield put(setPosts(data));
    const StoreEntry= yield select();
   console.log(StoreEntry);
}

export function* watchClickSaga() {
    yield takeLatest(GET_POSTS, workerSaga)
}

export default function* rootSaga() {

    yield watchClickSaga();
}