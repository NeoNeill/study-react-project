import { Provider } from "react-redux";
import { AuthContextProvider } from "../Auth-context/Auth-context-provider";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../Theme-context/Theme-context-provider";
import { Layout } from "../Layout/Layout";
import "./App.css";
import { store } from "../../redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Layout>
                        <RestaurantsPage />
                    </Layout>
                </ThemeContextProvider>
            </AuthContextProvider>
        </Provider>
    );
};
