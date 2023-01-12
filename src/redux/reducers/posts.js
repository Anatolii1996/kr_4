import { SET_POSTS } from "../constants";

const initialState = [];

const posts = (state = initialState, { type, payload }) => {
    //console.log(payload);
    switch (type) {
        case SET_POSTS:
            return payload;
            
        default: return state;
    }
};

export default posts;