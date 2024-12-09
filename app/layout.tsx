import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saviour Promise — Frontend Developer",
  description:
    "Frontend Developer at CodSoft Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my development skills. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "nigeria",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Saviour Promise — Frontend Developer",
    description:
    "Frontend Developer at CodSoft Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "https://promise-folio.vercel.app",
    siteName: "https://promise-folio.vercel.app",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D22AQFEwyOFqavOZw/feedshare-shrink_1280/feedshare-shrink_1280/0/1728748262401?e=1736380800&v=beta&t=2HT7HkK6jtL0LlJGMWiA9o_DtuVpy24eL7G6gFUW00c",
        width: 1200,
        height: 630,
        alt: "Saviour Promise — Frontend Developer",
      },
      {
        url: "https://media.licdn.com/dms/image/v2/D4D22AQFX977sVGIDOg/feedshare-shrink_1280/feedshare-shrink_1280/0/1728748263345?e=1736380800&v=beta&t=DM-_cZA4_gb92UVS0DaRXOelyTSQ_41tfjp7-UIyuxY",
        width: 800,
        height: 800,
        alt: "Saviour Promise — Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:"Saviour Promise — Frontend Developer",
    description:
      "Frontend Developer at CodSoft Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my development skills. I thrive on turning ideas into seamless digital solutions.",
    creator: "@promiseNotNull",
    images: ["https://media.licdn.com/dms/image/v2/D4D22AQFxDJSGmjBcaA/feedshare-shrink_1280/feedshare-shrink_1280/0/1728748276855?e=1736380800&v=beta&t=ZgEXq40fZ0GbsZc9HGmumdF0gBpnnv2sW7gg5XTM4jo"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
