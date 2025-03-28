import { PropgressBar } from "../Propgress-bar/Propgress-bar";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
    return (
        <div className={styles.root}>
            <PropgressBar />
            <Header />
            <section className={styles.main}>{children}</section>

            <Footer />
        </div>
    );
};
