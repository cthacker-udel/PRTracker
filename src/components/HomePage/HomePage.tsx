"use client";
import React from "react";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import background from "@/assets/background/homepage.gif";
import { generateTooltip } from "@/helpers/generateTooltip/generateTooltip";
import { useStyleInjector } from "@/hooks/useStyleInjector/useStyleInjector";
import { Button, OverlayTrigger } from "@/lib/react-bootstrap";

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
            <div className={styles.homepage_body}>
                {"Welcome to the "}
                <span className={styles.homepage_app_name}>{"PR Tracker"}</span>
                {" app!"}
            </div>
            <div className={styles.homepage_summary}>
                {
                    "This is an application that helps you track your PR record at the gym, and track where you may need to be improving, and where you may be doing fine."
                }
                <div className={styles.homepage_features}>
                    <ul>
                        <li>{"Graph to analyze progress"}</li>
                        <li>
                            {
                                "Community of all users aiming to grow both physically and socially"
                            }
                        </li>
                        <li>
                            {
                                "Can view past progress, and see how far you've improved over the time working out."
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.homepage_button_bar}>
                <OverlayTrigger
                    delay={{ show: 500, hide: 5000 }}
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(properties, "Log In")
                    }
                    placement="bottom"
                >
                    <Button variant="outline-success">
                        <i className="fa-solid fa-dumbbell" />
                    </Button>
                </OverlayTrigger>
                <Button variant="outline-primary">{"Sign Up"}</Button>
            </div>
        </div>
    );
};

export default HomePage;
