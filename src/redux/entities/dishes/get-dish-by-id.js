import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
    "dish/getDishById",
    async (dishId, { rejectedWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/dish/${dishId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectedWithValue("no data");
            return;
        }

        return result;
    },
    {
        condition: (dishId, { getState }) => {
            return !selectDishById(getState(), dishId);
        },
    }
);
