import * as actionTypes from "./actionTypes";
import * as Trail from "../../services/dataService";
export const getData = apiData => {
  return {
    type: actionTypes.GET_DATA,
    apiData: apiData
  };
};
export const errorData = () => {
  return {
    type: actionTypes.FETCH_DATA_ERROR
  };
};
export const fetchData = ulr => {
  return async dispatch => {
    try {
      const { data } = await Trail.getUlrInfo(ulr);
      dispatch(getData(data));
    } catch (ex) {
      dispatch(errorData());
    }
  };
};
