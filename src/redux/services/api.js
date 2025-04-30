import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    tagTypes: ["reviews"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "/restaurants",
        }),
        getRestaurantById: builder.query({
            query: (restaurantId) => `restaurant/${restaurantId}`,
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
            providesTags: [{ type: "reviews", id: "ALL" }],
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                body: review,
                method: "POST",
            }),
            invalidatesTags: [{ type: "reviews", id: "ALL" }],
        }),
        getUsers: builder.query({
            query: () => "/users",
        }),
        getDishesByRestaurantId: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
        }),
        getDishById: builder.query({
            query: (dishId) => `/dish/${dishId}`,
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
    useGetUsersQuery,
    useGetReviewsByRestaurantIdQuery,
    useAddReviewMutation,
    useGetDishByIdQuery,
    useGetDishesByRestaurantIdQuery,
} = api;
