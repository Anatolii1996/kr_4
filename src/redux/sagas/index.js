import { takeLatest, put, call } from "redux-saga/effects"
import {getPosts, getUsers} from "../../api"
import { GET_POSTS, GET_USERS } from "../constants";
import { setPosts, setUsers } from "../action/actionCreator"


export function* workerSaga() {
    const data = yield call(getPosts);
    yield put(setPosts(data));
}

export function* watchClickSaga() {
    yield takeLatest(GET_POSTS, workerSaga);
}

export function* workGetUserSaga(){
    const data = yield call(getUsers);
    //console.log(data);
    yield put(setUsers(data));
}

export function* watchGetUserSaga(){
    yield takeLatest(GET_USERS, workGetUserSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
    yield watchGetUserSaga();
    
    
}