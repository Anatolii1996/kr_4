import { put, call, takeEvery } from "redux-saga/effects"
import {getPosts, getUsers, getPhotos} from "../../api"
import { GET_POSTS, GET_USERS, GET_PHOTOS } from "../constants";
import { setPosts, setUsers, setPhotos } from "../action/actionCreator"


export function* workerSaga() {
    const data = yield call(getPosts);
    yield put(setPosts(data));
}

export function* workGetUserSaga(){
    const data = yield call(getUsers);
    yield put(setUsers(data));
}

export function* workGetPhotosSaga(){
    const data = yield call(getPhotos);
    yield put(setPhotos(data));
}

export default function* rootSaga() {
    yield takeEvery(GET_POSTS, workerSaga);
    yield takeEvery(GET_USERS, workGetUserSaga);
    yield takeEvery(GET_PHOTOS, workGetPhotosSaga); 
       
}