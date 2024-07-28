  import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/nav/site-header";
import ReduxProvider from "@/redux/redux-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "ltce-Students-Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Toaster />
            <SiteHeader />
            <main className="md:p-8 p-2 grid items-center justify-center">
              <div className="max-w-6xl">{children}</div>
            </main>
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
