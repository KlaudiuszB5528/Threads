import "../globals.css";

import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/shared/LeftSidebar";
import type { Metadata } from "next";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </ClerkProvider>
    </html>
  );
}
