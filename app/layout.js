import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeContainer from "./_themeContainer/ThemeContainer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Fancy Dark & Night Mode Button",
  description: "Fancy Dark & Night Mode Button",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="https://i.postimg.cc/FHzjpkJn/tree-group-icon-flat-style-vector-11184521-removebg-preview.png" /></head>
      <body className={mont.className}>
        <ThemeContainer>{children}</ThemeContainer>
      </body>
    </html>
  );
}
