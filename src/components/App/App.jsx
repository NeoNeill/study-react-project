import { Provider } from "react-redux";
import { AuthContextProvider } from "../Auth-context/Auth-context-provider";
import { ThemeContextProvider } from "../Theme-context/Theme-context-provider";
import { Layout } from "../Layout/Layout";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RestaurantPage } from "../../pages/restaurant-page";
import { HomePage } from "../../pages/home-page";
import { RestaurantsPage } from "../../pages/restaurants-page";
import { RestaurantsMenuPage } from "../../pages/restaurant-menu-page";
import { RestarauntReviewsPage } from "../../pages/restaurant-reviews-page";
import "./App.css";
import { RestarauntDishPage } from "../../pages/restaurant-dish-page";

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route
                                    path="/restaurants"
                                    element={<RestaurantsPage />}
                                >
                                    <Route
                                        index
                                        element={
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <h3>Choose restaurant</h3>
                                            </div>
                                        }
                                    />
                                    <Route
                                        path=":restaurantId"
                                        element={<RestaurantPage />}
                                    >
                                        <Route
                                            index
                                            element={<Navigate to="menu" />}
                                        />
                                        <Route
                                            path="menu"
                                            element={<RestaurantsMenuPage />}
                                        />
                                        <Route
                                            path="reviews"
                                            element={<RestarauntReviewsPage />}
                                        />
                                    </Route>
                                </Route>
                                <Route
                                    path="/dish/:dishId"
                                    element={<RestarauntDishPage />}
                                />
                                <Route
                                    path="*"
                                    element={<div>Page not found</div>}
                                />
                            </Route>
                        </Routes>
                    </ThemeContextProvider>
                </AuthContextProvider>
            </Provider>
        </BrowserRouter>
    );
};
