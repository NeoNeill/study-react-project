import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    selectors: {
        selectRequestStatus: (state, id) => state[id] || "idle",
        selectIsLoading: (state, id) => state[id] === "pending",
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({ type }) => type.endsWith("pending"),
                (state, { meta }) => {
                    state[meta.requestId] = "pending";
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith("rejected"),
                (state, { meta }) => {
                    state[meta.requestId] = "rejected";
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith("fulfilled"),
                (state, { meta }) => {
                    state[meta.requestId] = "fulfilled";
                }
            ),
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;
