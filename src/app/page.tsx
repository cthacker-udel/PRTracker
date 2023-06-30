import type { Metadata } from "next";

import { commonMetadata } from "@/common/commonMetadata";

export const metadata: Metadata = {
    ...commonMetadata,
    description:
        "Welcome to the PR tracker app! This helps you log your PR's while going to the gym, or generally any activity. It has graphs that process the data entered and feed it into an algorithm that predicts the next accomplishments!",
    title: "PR Tracker",
};

export { default } from "@/components/HomePage/HomePage";
