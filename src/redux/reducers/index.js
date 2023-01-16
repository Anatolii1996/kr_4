import { combineReducers } from "redux";
import {posts} from "./posts";
import { users } from "./users";
import { photos } from "./photos";



const reducer = combineReducers({
    posts,
    users,
    photos,
});

export default reducer;