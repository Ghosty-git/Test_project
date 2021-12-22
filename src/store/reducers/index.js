import { combineReducers } from "redux";
import auth from "./auth";
import crud from "./crud";
import jobsReducer from "./jobs"
import resumeReducer from "./resume"

const rootReducer = combineReducers({
    auth, jobsReducer, resumeReducer, crud
})

export default rootReducer