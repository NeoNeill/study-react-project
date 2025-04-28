import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaraunt-id";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(
            getReviewsByRestaurantId.fulfilled,
            (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            }
        ),
});

const selectReviewsSlice = (state) => state.reviews;

export const { selectById: selectRreviewById, selectIds: selectReviewsIds } =
    entityAdapter.getSelectors(selectReviewsSlice);
