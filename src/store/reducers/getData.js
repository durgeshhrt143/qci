import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  apiData: {},
  error: false
};
const getData = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.GET_DATA:
      const apiData = {
        ...action.apiData
      };
      return updateObject({ ...state }, { apiData: { apiData }, error: false });
    case actionType.FETCH_DATA_ERROR:
      return updateObject({ ...state }, { apiData: { apiData }, error: true });
    default:
      return state;
  }
};

export default getData;
