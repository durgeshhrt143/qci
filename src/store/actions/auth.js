import * as actionTypes from "./actionTypes";
// export const setUlr = () => {
//   return {
//     type: actionTypes.SET_ULR
//   };
// };
// export const removeUlr = () => {
//   return {
//     type: actionTypes.REMOVE_ULR
//   };
// };
export const getAuth = auth => {
  return {
    type: actionTypes.AUTH,
    auth
  };
};
