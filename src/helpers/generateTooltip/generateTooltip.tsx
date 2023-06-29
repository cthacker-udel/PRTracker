import React, { type ReactNode } from "react";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import { Tooltip } from "@/lib/react-bootstrap";

import styles from "./generateTooltip.module.css";

/**
 * Generates a tooltip adherent to the content passed in as well as the properties which
 * is required to display the tooltip properly and are injected by the OverlayTrigger component
 *
 * @param properties - The properties automatically injected by the OverlayTrigger component
 * @param content - The content of the tooltip to display
 */
export const generateTooltip = (
    properties: OverlayInjectedProps,
    content: ReactNode | string,
): JSX.Element => (
    <Tooltip {...properties}>
        <span className={styles.tooltip_content}>{content}</span>
    </Tooltip>
);
