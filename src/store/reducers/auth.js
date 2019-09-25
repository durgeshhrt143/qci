import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  auth: false
};
const auth = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.AUTH:
      const changeAuth = action.auth;
      return updateObject({ ...state }, { auth: changeAuth });
    default:
      return { ...state };
  }
};

export default auth;
