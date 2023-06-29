/* eslint-disable new-cap -- disabled */
/* eslint-disable camelcase -- disabled */
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import React from "react";

const jetBrainsMono = JetBrains_Mono();

/**
 *
 * @param param0
 * @returns
 */
const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
    <main className={jetBrainsMono.className}>
        <Component {...pageProps} />
    </main>
);

export default Application;
