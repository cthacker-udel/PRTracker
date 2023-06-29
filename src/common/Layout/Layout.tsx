import React from "react";

import styles from "./Layout.module.css";

type LayoutProperties = React.PropsWithChildren;

/**
 * Common layout component, which allows for a consistent style across the application
 *
 * @param props - The properties of the layout component
 * @param props.children - The children of the layout (aka what the component wraps around it)
 * @returns The layout component, which allows for consistent layout of all elements in the application
 */
export const Layout = ({ children }: LayoutProperties): JSX.Element => (
    <div className={styles.layout}>{children}</div>
);
