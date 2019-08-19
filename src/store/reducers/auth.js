import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  ulr: false
};
const auth = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.GET_ULR:
      const newToken = action.ulr;
      return updateObject({ ...state }, { ulr: newToken });
    default:
      return { ...state };
  }
};

export default auth;
