import type { Metadata } from "next";

import icon from "@/assets/icons/homepage.ico";

export const commonMetadata: Partial<Metadata> = {
    applicationName: "PR-Tracker",
    authors: [
        { name: "cthacker-udel", url: "https://github.com/cthacker-udel" },
    ],
    creator: "Cameron Thacker",
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
};
