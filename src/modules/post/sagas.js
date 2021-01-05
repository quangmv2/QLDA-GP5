import { fetchService } from "services";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";

import { getPostsSuccess, getPostsFailed, getPostNull } from "./actions";
import { ROOT_API_URL } from "constants";
import { GET_POST } from "../../constants/routes";

export default function* root() {
    yield all([
    ]);
}


///////////////////////////////////////////////////// FUNCTIONS //////////////////



///////////////////////////////////////////////////// REQUEST //////////////////
