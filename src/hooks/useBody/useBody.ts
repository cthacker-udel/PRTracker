import React from "react";

type useBodyProperties = {
    className?: string;
    classNames?: string[];
    style?: CSSStyleDeclaration;
};

/**
 * Allows the user to inject styles into the body element of the html
 *
 * @param props - The properties of the `useBody` hook
 * @param props.style - The style attributes to assign to the body element
 */
export const useBody = ({
    className,
    classNames,
    style,
}: useBodyProperties): void => {
    React.useEffect(() => {
        const foundBody = document.querySelector("body");

        if (foundBody !== null) {
            if (style !== undefined) {
                for (const eachKey of Object.keys(style)) {
                    foundBody.style.setProperty(
                        eachKey,
                        style[eachKey as unknown as number],
                    );
                }
            }
            if (className !== undefined) {
                foundBody.className += ` ${className}`;
            }
            if (classNames !== undefined && classNames.length > 0) {
                for (const eachClassName of classNames) {
                    foundBody.className += ` ${eachClassName}`;
                }
            }
        }
    }, [className, classNames, style]);
};
