import * as actionTypes from "./Types";

export function userAdded(user) {
  return {
    type: actionTypes.USER_ADDED,
    payload: user,
  };
}
