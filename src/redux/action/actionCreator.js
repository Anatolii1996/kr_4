import { GET_POSTS, SET_POSTS, GET_USERS, SET_USERS, GET_PHOTOS, SET_PHOTOS } from "../constants";

export const getPosts = () => ({
    type: GET_POSTS,
});

export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
});

export const getUsers = ()=>({
    type: GET_USERS,
});

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

export const getPhotos = ()=>({
    type: GET_PHOTOS,
});

export const setPhotos = (payload) => ({
    type: SET_PHOTOS,
    payload,
});
