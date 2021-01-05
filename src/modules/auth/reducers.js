import { fromJS } from "immutable";
import { NOTIFICATION_TYPE } from "constants";
import { openNotification } from "helpers";
import * as types from "./constants";

export const initialState = fromJS({
  loading: false,
  logged: false,
  logout: false,
  accessToken: "",
  refreshToken: "",
  identity: null,
  challenge: "",
  userInfo: undefined
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
