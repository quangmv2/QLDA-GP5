import { fetchService } from "services";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import { NOTIFICATION_TYPE } from "constants";
import { openNotification } from "helpers";

import { ROOT_API_URL } from "constants";

export default function* root() {
    yield all([
    ]);
}




///////////////////////////////////////////////////// FUNCTIONS //////////////////



///////////////////////////////////////////////////// REQUEST //////////////////

