import stateCreator from "../../services/stateCreator";
import { POST_EXPERIENCE_ONE_FAILED, POST_EXPERIENCE_ONE_LOADING, POST_EXPERIENCE_ONE_SUCCES, POST_EXPERIENCE_THREE_FAILED, POST_EXPERIENCE_THREE_LOADING, POST_EXPERIENCE_THREE_SUCCES, POST_EXPERIENCE_TWO_FAILED, POST_EXPERIENCE_TWO_LOADING, POST_EXPERIENCE_TWO_SUCCES, POST_RESUME_FAILED, POST_RESUME_LOADING, POST_RESUME_SUCCES } from "../constans";

const initialState = {
    resume: stateCreator(),
    personalData: stateCreator(),
    education: stateCreator(),
    language: stateCreator(),
    skills: stateCreator(),
    workExperienceOne: stateCreator(),
    workExperienceTwo: stateCreator(),
    workExperienceThree: stateCreator(),
}

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_RESUME_SUCCES:
            return {
                ...state,
                resume: stateCreator("succes"),
            }

        case POST_RESUME_LOADING:
            return {
                ...state,
                personalData: stateCreator(),
                education: stateCreator(),
                language: stateCreator("loading"),
                skills: stateCreator("loading"),

            }

        case POST_RESUME_FAILED:
            return {
                ...state,
                personalData: stateCreator('failed'),
                education: stateCreator("failed"),
                language: stateCreator("failed"),
                skills: stateCreator("failed"),
            }

        case POST_EXPERIENCE_ONE_SUCCES:
            return {
                ...state,
                workExperienceOne: stateCreator("succes"),
            }

        case POST_EXPERIENCE_ONE_LOADING:
            return {
                ...state,
                workExperienceOne: stateCreator("loading"),
            }

        case POST_EXPERIENCE_ONE_FAILED:
            return {
                ...state,
                workExperienceOne: stateCreator("failed"),
            }

        case POST_EXPERIENCE_TWO_SUCCES:
            return {
                ...state,
                workExperienceTwo: stateCreator("succes"),
            }

        case POST_EXPERIENCE_TWO_LOADING:
            return {
                ...state,
                workExperienceTwo: stateCreator("loading"),
            }

        case POST_EXPERIENCE_TWO_FAILED:
            return {
                ...state,
                workExperienceTwo: stateCreator("failed"),
            }

        case POST_EXPERIENCE_THREE_SUCCES:
            return {
                ...state,
                workExperienceThree: stateCreator("succes"),
            }

        case POST_EXPERIENCE_THREE_LOADING:
            return {
                ...state,
                workExperienceThree: stateCreator("loading"),
            }

        case POST_EXPERIENCE_THREE_FAILED:
            return {
                ...state,
                workExperienceThree: stateCreator("failed"),
            }
        default:
            return state

    }
}



export default resumeReducer