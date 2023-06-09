/* eslint-disable camelcase -- disabled */
/* eslint-disable new-cap -- disabled */
import { DynaPuff, JetBrains_Mono } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";

import { Layout } from "@/common";

const dynaPuff = DynaPuff({ subsets: ["latin"], variable: "--font-dyna-puff" });

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

const metadata = {
    description: "Generated by Next.js",
    title: "Next.js",
};

/**
 * The root layout of the application
 *
 * @param param0
 * @returns
 */
const RootLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <html
        className={`${dynaPuff.variable} ${jetBrainsMono.variable}`}
        lang="en"
    >
        <head>
            <link
                crossOrigin="anonymous"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                rel="stylesheet"
            />
        </head>
        <body>
            <Layout>{children}</Layout>
            <ToastContainer
                autoClose={5000}
                closeOnClick
                newestOnTop
                pauseOnHover
                position="top-right"
            />
        </body>
    </html>
);

export { RootLayout as default, metadata };
