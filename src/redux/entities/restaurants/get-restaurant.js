import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice";

export const getRestaurant = createAsyncThunk(
    "restaurant/getRestaurant",
    async (restaurantId, { rejectedWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/restaurant/${restaurantId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectedWithValue("no data");
            return;
        }

        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            return !selectRestaurantById(getState(), restaurantId);
        },
    }
);
