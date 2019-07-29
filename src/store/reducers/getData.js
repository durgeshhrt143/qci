import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  data: null,
  loading: false
};
const getData = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.GET_DATA:
      const newData = {
        ...action.ulr
      };
      return updateObject({ ...state }, { data: newData, loading: false });
    case actionType.LOADING:
      return updateObject({ ...state }, { loading: true });
    default:
      return state;
  }
};

export default getData;
