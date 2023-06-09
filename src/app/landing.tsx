/* eslint-disable react/jsx-indent -- disabled */
/* eslint-disable @typescript-eslint/indent -- disabled */
"use-client";
import React from "react";

import { Login } from "./login/Login";

/**
 * The landing page for the application
 *
 * @returns - The landing page for the application, using the new app-routing functionality
 */
const Home = (): JSX.Element => (
  <main>
    <Login />
  </main>
);

export default Home;
