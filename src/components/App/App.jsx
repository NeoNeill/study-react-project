import { AuthContextProvider } from "../Auth-context/Auth-context-provider";
import { Layout } from "../Layout/Layout";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../Theme-context/Theme-context-provider";
import "./App.css";

export const App = () => {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Layout>
                    <RestaurantsPage />
                </Layout>
            </ThemeContextProvider>
        </AuthContextProvider>
    );
};
