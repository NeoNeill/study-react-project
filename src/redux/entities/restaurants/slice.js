import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock";

const initialState = {
    ids: normalizedRestaurants.map(({ id }) => id),
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantsById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
    },
});

export const { selectRestaurantsById, selectRestaurantsIds } =
    restaurantsSlice.selectors;
