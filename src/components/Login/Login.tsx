/* eslint-disable @typescript-eslint/no-floating-promises -- disabled */
"use client";
import { useRouter } from "next/navigation";
import React from "react";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Key } from "ts-key-enum";

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

type FormValues = {
    password: string;
    username: string;
};

const FORM_DEFAULT_VALUES: FormValues = {
    password: "",
    username: "",
};

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

    const { formState, getValues, register } = useForm<FormValues>({
        criteriaMode: "all",
        defaultValues: FORM_DEFAULT_VALUES,
        delayError: 100,
        mode: "all",
        reValidateMode: "onChange",
    });

    const router = useRouter();

    const { dirtyFields, errors } = formState;

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const toggleShowPassword = React.useCallback(() => {
        setShowPassword((oldValue: boolean) => !oldValue);
    }, []);

    const login = React.useCallback(async () => {
        const { password, username } = getValues();
        const { password: passwordIsDirty, username: usernameIsDirty } =
            dirtyFields;

        if (
            Object.keys(errors).length === 0 &&
            passwordIsDirty &&
            usernameIsDirty
        ) {
            const loginToast = toast.loading("Logging in");
            const loginResponse: { data: boolean } = await new Promise(
                (response, _reject) => {
                    response({ data: false });
                },
            );
            const { data } = loginResponse;
            if (data) {
                toast.update(loginToast, {
                    autoClose: 1000,
                    isLoading: false,
                    render: "Successfully logged in!",
                });
            } else {
                toast.update(loginToast, {
                    autoClose: 1000,
                    isLoading: false,
                    render: "Failed to login",
                });
            }
        }
    }, [dirtyFields, errors, getValues]);

    const keyboardShortcuts = React.useCallback(
        async (event: KeyboardEvent) => {
            const { ctrlKey, key } = event;
            const { password, username } = dirtyFields;
            if (key === Key.Enter && password && username) {
                await login();
            } else if (key === Key.ArrowRight && ctrlKey) {
                router.push("/");
            }
        },
        [dirtyFields, login, router],
    );

    React.useEffect(() => {
        if (document !== undefined) {
            document.addEventListener("keydown", keyboardShortcuts);
        }
    }, [keyboardShortcuts]);

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
                                {...register("username")}
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
                                {...register("password")}
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
                    trigger={["focus", "hover"]}
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
                    trigger={["focus", "hover"]}
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
