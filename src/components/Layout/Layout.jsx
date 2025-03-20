import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <footer>footer</footer>
        </div>
    );
};
