import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: "5",
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const CLEAR_ACTION = "CLEAR_ACTION";
const INCREMENT_RATING_ACTION = "INCREMENT_RATING_ACTION";
const DECREMENT_RATING_ACTION = "DECREMENT_RATING_ACTION";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...state, name: payload };
        case SET_TEXT_ACTION:
            return { ...state, text: payload };
        case INCREMENT_RATING_ACTION:
            return { ...state, rating: Math.min(state.rating + 1, 5) };
        case DECREMENT_RATING_ACTION:
            return { ...state, rating: Math.max(state.rating - 1, 1) };
        case CLEAR_ACTION:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    const setName = (name) => {
        dispatch({ type: SET_NAME_ACTION, payload: name });
    };
    const setText = (text) => {
        dispatch({ type: SET_TEXT_ACTION, payload: text });
    };
    const incrementRating = () => {
        dispatch({ type: INCREMENT_RATING_ACTION });
    };
    const decrementRating = () => {
        dispatch({ type: DECREMENT_RATING_ACTION });
    };
    const clear = () => {
        dispatch({ type: CLEAR_ACTION });
    };
    return {
        form,
        setName,
        setText,
        incrementRating,
        decrementRating,
        clear,
    };
};
