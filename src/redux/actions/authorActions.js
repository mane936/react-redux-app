import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

//thunks: functions into functions for postphone calls in thunk
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}
