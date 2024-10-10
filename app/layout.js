import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiring Zen",
  description: "Hiring Zen is a job board for the best companies in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={` ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
