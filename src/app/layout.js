import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import MeetingCTA from "@/components/MeetingCTA";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserratSans.variable}`}>
      <body cz-shortcut-listen="true">
        <Topbar />
        <Menu />
        {children}
        <MeetingCTA />
        <Footer />
      </body>
    </html>
  );
}
