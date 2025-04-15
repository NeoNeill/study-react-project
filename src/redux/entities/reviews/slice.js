import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../materials/normalized-mock";

const initialState = {
    ids: normalizedReviews.map(({ id }) => id),
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviewsById: (state, id) => state.entities[id],
    },
});

export const { selectReviewsById } = reviewsSlice.selectors;
