import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description: "IMDb Clone for Udemy NextJS 13 course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* Search */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
