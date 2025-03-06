import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-I",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zayed's Portfolio",
  description: "Zayed's portfolio app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  initialTheme: "light" | "dark";
}) {
  const cookieStore = await cookies();
  const themeFromCookie =
    (cookieStore.get("theme")?.value as "light" | "dark") || "dark";
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className={`${InterFont.variable}  antialiased`}>
        <ThemeProvider initialTheme={themeFromCookie}>
          <main className="min-h-screen">{children}</main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            toastStyle={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
            progressStyle={{
              backgroundColor: "var(--primary)",
            }}
          />
          ;
        </ThemeProvider>
      </body>
    </html>
  );
}
