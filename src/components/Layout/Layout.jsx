import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PropgressBar } from "../Propgress-bar/Propgress-bar";

export const Layout = ({ children }) => {
    return (
        <div>
            <PropgressBar />
            <Header />
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
                {children}
            </section>
            <Footer />
        </div>
    );
};
