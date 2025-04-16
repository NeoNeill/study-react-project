import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock";

const initialState = {
    ids: normalizedDishes.map(({ id }) => id),
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
};

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishesById: (state, id) => state.entities[id],
    },
});

export const { selectDishesById } = dishesSlice.selectors;
