import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Clever Challenge",
  description: "Frontend coding for Clever",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
