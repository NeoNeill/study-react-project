import { Outlet } from "react-router";
import { CartContainer } from "../Cart/Cart-container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PropgressBar } from "../Propgress-bar/Propgress-bar";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <div className={styles.root}>
            <PropgressBar />
            <Header />
            <section className={styles.main}>
                <Outlet />
            </section>
            <div className={styles.cart}>
                <CartContainer />
            </div>
            <Footer />
        </div>
    );
};
