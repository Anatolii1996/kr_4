import { SET_POSTS } from "../constants";
const initialState = [];

export const posts = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case SET_POSTS:
            return payload;
            
        default: return state;
    }
};

