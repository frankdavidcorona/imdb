import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "IMDb Clone for Udemy NextJS 13 course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* Search */}
        {children}
      </body>
    </html>
  );
}
