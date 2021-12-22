import stateCreator from "../../services/stateCreator"
import { GET_CATEGORY_FAILED, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCES, GET_JOBS_DETAIL_FAILED, GET_JOBS_DETAIL_LOADING, GET_JOBS_DETAIL_SUCCES, GET_JOBS_FAILED, GET_JOBS_LOADING, GET_JOBS_SUCCES } from "../constans"

const initialState = {
    jobs: [],
    getJobs: stateCreator(),
    jobsDetail: stateCreator(),
    category: stateCreator(),

}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS_SUCCES:
            return {
                ...state,
                jobs: action.jobs,
                getJobs: stateCreator('success'),
            }

        case GET_JOBS_LOADING:
            return {
                ...state,
                getJobs: stateCreator('loading'),
            }

        case GET_JOBS_FAILED:
            return {
                ...state,
                getJobs: stateCreator('failed'),
            }

        case GET_JOBS_DETAIL_SUCCES:
            return {
                ...state,

                getJobs: stateCreator('succes'),
            }

        case GET_JOBS_DETAIL_LOADING:
            return {
                ...state,
                jobsDetail: stateCreator("loading"),
            }

        case GET_JOBS_DETAIL_FAILED:
            return {
                ...state,
                getJobs: stateCreator('failed'),
            }

        case GET_CATEGORY_SUCCES:
            return {
                ...state,
                getJobs: stateCreator('succes'),
            }

        case GET_CATEGORY_LOADING:
            return {
                ...state,
                getJobs: stateCreator('loading'),
            }

        case GET_CATEGORY_FAILED:
            return {
                ...state,
                getJobs: stateCreator('failed'),
            }


        default:
            return state

    }
}



export default jobsReducer