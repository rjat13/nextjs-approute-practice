import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export const metadata = {
  title: "Sign In Page",
  description: "A simple sign in page built with Next.js and Tailwind CSS.",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html>
        <body className="bg-dark-1">{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
