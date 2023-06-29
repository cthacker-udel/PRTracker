import type { Metadata } from "next";

import icon from "@/assets/icons/homepage.ico";

export const metadata: Metadata = {
    applicationName: "PR-Tracker",
    authors: [
        { name: "cthacker-udel", url: "https://github.com/cthacker-udel" },
    ],
    creator: "Cameron Thacker",
    description:
        "Welcome to the PR tracker app! This helps you log your PR's while going to the gym, or generally any activity. It has graphs that process the data entered and feed it into an algorithm that predicts the next accomplishments!",
    icons: icon.src,
    keywords: [
        "react",
        "nextjs",
        "workout app",
        "workout",
        "fitness",
        "workout tracker",
        "pr tracker",
        "pr progress",
        "gym app",
        "gym",
    ],
    publisher: "Vercel",
    title: "PR Tracker",
};

export { default } from "@/components/HomePage/HomePage";
