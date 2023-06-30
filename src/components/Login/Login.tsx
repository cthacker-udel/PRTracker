"use client";
import React from "react";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import background from "@/assets/background/login.gif";
import { commonStyles } from "@/common/commonStyles";
import { generateTooltip } from "@/helpers/generateTooltip/generateTooltip";
import { useStyleInjector } from "@/hooks/useStyleInjector/useStyleInjector";
import {
    Button,
    Form,
    InputGroup,
    OverlayTrigger,
} from "@/lib/react-bootstrap";

import styles from "./Login.module.css";

/**
 *
 * @returns The login page, which allows the user to successfully sign up
 */
const Login = (): JSX.Element => {
    useStyleInjector([
        {
            cssQuery: "body",
            style: {
                backgroundImage: `url('${background.src}')`,
                ...commonStyles.lightenBackground,
            },
        },
    ]);

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const toggleShowPassword = React.useCallback(() => {
        setShowPassword((oldValue: boolean) => !oldValue);
    }, []);

    return (
        <div className={styles.login_content}>
            <div className={styles.login_form_controls}>
                <Form.Group controlId="username">
                    <InputGroup>
                        <OverlayTrigger
                            overlay={(
                                properties: OverlayInjectedProps,
                            ): JSX.Element =>
                                generateTooltip(properties, "Username")
                            }
                            placement="left"
                            trigger="focus"
                        >
                            <Form.Control
                                className={styles.login_form}
                                type="text"
                            />
                        </OverlayTrigger>
                        <InputGroup.Text className={styles.login_form_addendum}>
                            <i className="fa-solid fa-user" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="password">
                    <InputGroup>
                        <OverlayTrigger
                            overlay={(
                                properties: OverlayInjectedProps,
                            ): JSX.Element =>
                                generateTooltip(properties, "Password")
                            }
                            placement="left"
                            trigger="focus"
                        >
                            <Form.Control
                                className={styles.login_form}
                                type={showPassword ? "text" : "password"}
                            />
                        </OverlayTrigger>
                        <InputGroup.Text className={styles.login_form_addendum}>
                            <i className="fa-solid fa-key" />
                        </InputGroup.Text>
                        <OverlayTrigger
                            overlay={(
                                properties: OverlayInjectedProps,
                            ): JSX.Element =>
                                generateTooltip(
                                    properties,
                                    showPassword ? "Hide" : "Show",
                                )
                            }
                            placement="right"
                            trigger="hover"
                        >
                            <Button
                                className={styles.login_form_addendum}
                                onClick={toggleShowPassword}
                            >
                                <i
                                    className={`fa-solid fa-${
                                        showPassword ? "eye-slash" : "eye"
                                    } ${styles.hide_password_icon}`}
                                />
                            </Button>
                        </OverlayTrigger>
                    </InputGroup>
                </Form.Group>
            </div>
            <div className={styles.login_form_buttons}>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(properties, "Login")
                    }
                    placement="left"
                >
                    <Button variant="outline-success">
                        <i className="fa-solid fa-right-to-bracket" />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(properties, "Return to Home")
                    }
                    placement="right"
                >
                    <Button variant="outline-primary">
                        <i className="fa-solid fa-house" />
                    </Button>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Login;
