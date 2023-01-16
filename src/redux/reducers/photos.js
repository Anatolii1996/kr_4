import { SET_PHOTOS } from "../constants";

const initialState = [];

export const photos = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case SET_PHOTOS:
            return payload;
            
        default: return state;
    }
};