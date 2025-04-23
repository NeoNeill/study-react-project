import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tab-link/tab-link";
import { Outlet } from "react-router";
import styles from "./Restaurant.module.css";

export const Restaurant = () => {
    return (
        <div className={styles.tab}>
            <Tabs>
                <TabLink to={"menu"}>Menu</TabLink>
                <TabLink to={"reviews"}>Reviews</TabLink>
            </Tabs>
            <Outlet />
        </div>
    );
};
