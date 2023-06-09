"use-client";
import Link from "next/link";
import React from "react";

/**
 * The landing page for the application
 *
 * @returns - The landing page for the application, using the new app-routing functionality
 */
const Home = (): JSX.Element => (
    <main>
        <Link href="/login">
            <button type="button">{"To login"}</button>
        </Link>
    </main>
);

export default Home;
