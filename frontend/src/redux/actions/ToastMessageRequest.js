import { TOAST_MESSAGE_REQUEST } from "./actionTypes";

export const toastMessage = (data) =>{
  return {
    type: TOAST_MESSAGE_REQUEST,
    data,
  };
};
