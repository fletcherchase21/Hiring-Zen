import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from "@/components";
import TinyDots from "@/components/core/tiny-dots";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiring Zen",
  description: "Hiring Zen is a job board for the best companies in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={` ${inter.className}`}>
        <ToastContainer position="top-right" />
        <Header />
        <main className="layout-wide rounded-3xl relative main overflow-hidden">
          <TinyDots />
          <div className="relative z-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
