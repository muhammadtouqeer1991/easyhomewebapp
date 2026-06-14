import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./media.css";
import Topbar from "@/components/Topbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy Home - Mortgage & Real Estate Solutions",
  description: "Find best mortgage and real estate solutions with Easy Home.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserratSans.variable}`}>
      <body cz-shortcut-listen="true">
        <Topbar />
        <Menu />
        {children}
        {/* <MeetingCTA /> */}
        <Footer />
      </body>
    </html>
  );
}
