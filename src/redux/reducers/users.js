import {SET_USERS } from "../constants";

const initialState = [];

export const users = (state = initialState, { type, payload }) => {
    //console.log(payload);
    switch (type) {
        case SET_USERS:
            return payload;
            
        default: return state;
    }};