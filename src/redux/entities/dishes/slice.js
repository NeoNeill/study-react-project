import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./get-dishes-by-restaraunt-id";
import { getDishById } from "./get-dish-by-id";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(
                getDishesByRestaurantId.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setMany(state, payload);
                }
            )
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});

const selectDishesSlice = (state) => state.dishes;

export const { selectById: selectDishById, selectIds: selectDishesIds } =
    entityAdapter.getSelectors(selectDishesSlice);
