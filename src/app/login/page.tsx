import type { Metadata } from "next";

import { commonMetadata } from "@/common/commonMetadata";

export const metadata: Metadata = {
    ...commonMetadata,
    description: "Login page for the PR tracker app",
    title: "PR Tracker - Login",
};

export { default } from "@/components/Login/Login";
