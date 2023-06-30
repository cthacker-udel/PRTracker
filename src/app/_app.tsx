/* eslint-disable new-cap -- disabled */
/* eslint-disable camelcase -- disabled */
import type { AppProps } from "next/app";
import React from "react";

/**
 *
 * @param param0
 * @returns
 */
const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
    <main>
        <Component {...pageProps} />
    </main>
);

export default Application;
