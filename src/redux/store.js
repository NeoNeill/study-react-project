import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { cartSlice } from "./entities/cart/slice";
import { dishesSlice } from "./entities/dishes/slice";
import { usersSlice } from "./entities/users/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { requestSlice } from "./entities/request/slice";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);
    return next(action);
};

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(loggerMiddleware),
});
