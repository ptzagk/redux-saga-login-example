import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCEEDED,
    SIGNUP_FAILED,
    INPUTCHANGE
} from "actions/signup";

const initialState = {
    isFetching: false,
    email: "",
    password: "",
    pause: false,
    errors: {}
};

export default (state=initialState, action={}) => {
    switch (action.type) {

        case SIGNUP_REQUEST:
            return { ...state, isFetching: true, errors: {} };

        case SIGNUP_SUCCEEDED:
            return { ...state, isFetching: false, user: action.user };

        case SIGNUP_FAILED:
            return {
                ...state, isFetching: false,
                errors: action.errors,
                pause: true
            };

        case INPUTCHANGE:
            let { change } = action;
            if (change.hasOwnProperty("email")) {
                return {
                    ...state,
                    email: change.email,
                    errors: { ...state.errors, email: "" },
                    pause: false
                };
            }
            if (change.hasOwnProperty("password")) {
                return {
                    ...state,
                    password: change.password ,
                    errors: { ...state.errors, password: "" },
                    pause: false
                };
            }

        default: return state;
    }
};
