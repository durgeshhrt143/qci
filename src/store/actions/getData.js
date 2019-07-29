import * as actionTypes from "./actionTypes";
import * as Trail from "../../services/dataService";
export const getData = ulr => {
  return {
    type: actionTypes.GET_DATA,
    ulr
  };
};
export const loading = () => {
  return {
    type: actionTypes.LOADING
  };
};
export const fetchData = ulr => {
  return async dispatch => {
    dispatch(loading());
    const { data } = await Trail.getUlrInfo(ulr);
    dispatch(getData(data));
  };
};
