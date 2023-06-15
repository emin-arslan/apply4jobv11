import { POP_UP_JOB_DETAILS } from "./actionTypes"

export const JobDetailsPopUp = (jobPageDetailsPopUp) => {
  return {
    type:POP_UP_JOB_DETAILS,
    jobPageDetailsPopUp,
  }
}

export default JobDetailsPopUp
