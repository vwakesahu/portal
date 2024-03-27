import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/nav/site-header";
import ReduxProvider from "@/redux/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "ltce-Students-Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <SiteHeader />
            <div className="p-8">{children}</div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
