import { fromJS } from "immutable";
import { NOTIFICATION_TYPE } from "constants";
import * as types from "./constants";
import { openNotification } from "helpers";
import { fetchService } from "services";


export const initialState = fromJS({
  loading: false,
  posts: [],
  page: 0,
  errors: null,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
