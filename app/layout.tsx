import { League_Spartan } from "next/font/google";
import { Header, Footer } from "./common";
import "./globals.css";

const leagueSpartanFont = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Architect Studio",
  description: "Portfolio Website for a local architecture Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-veryDarkBlue ${leagueSpartanFont.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
