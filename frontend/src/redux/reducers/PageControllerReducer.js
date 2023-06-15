import { POP_UP_JOB_DETAILS } from "../actions/actionTypes";

const INITAL_STATE = {
  pageControls: {
    pageStatus: "",
    pageSize:""
  },
};

export const PageController = (state = INITAL_STATE, action) => {

  switch (action.type) {
    case POP_UP_JOB_DETAILS:
      return { ...state, ...state.pageControls.jobPageDetailsPopUp=action.jobPageDetailsPopUp};
    default:
      return state;
  }
};
