"use client";
import React from "react";

import background from "@/assets/background/homepage.gif";
import { useStyleInjector } from "@/hooks/useStyleInjector/useStyleInjector";
import { Button } from "@/lib/react-bootstrap";

import styles from "./HomePage.module.css";

/**
 * The home page, which welcomes the user when they land on the website
 *
 * @returns The home page, which comprises of the log in and sign up button
 */
const HomePage = (): JSX.Element => {
    useStyleInjector([
        {
            cssQuery: "body",
            style: {
                backgroundBlendMode: "screen",
                backgroundColor: "rgba(128, 128, 128, 0.55)",
                backgroundImage: `url('${background.src}')`,
                backgroundSize: "cover",
            },
        },
    ]);

    return (
        <div className={styles.homepage}>
            <div className={styles.homepage_body}>{"Home Page"}</div>
            <div className={styles.homepage_button_bar}>
                <Button>{"Log In"}</Button>
                <Button>{"Sign Up"}</Button>
            </div>
        </div>
    );
};

export default HomePage;
