import * as actionTypes from "../Actions/Types";

const initialState = {
  addUser: { username: "Bob", email: "test@test.com", password: "hej123" },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_ADDED:
      console.log(state);
      return {
        addUser: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
