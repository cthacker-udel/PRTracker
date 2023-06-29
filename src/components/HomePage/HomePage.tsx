import React from "react";

import { Button } from "@/lib/react-bootstrap";

import styles from "./HomePage.module.css";

/**
 * The home page, which welcomes the user when they land on the website
 *
 * @returns The home page, which comprises of the log in and sign up button
 */
export const HomePage = (): JSX.Element => (
    <div className={styles.homepage}>
        <div className={styles.homepage_button_bar}>
            <Button>{"Log In"}</Button>
            <Button>{"Sign Up"}</Button>
        </div>
    </div>
);
