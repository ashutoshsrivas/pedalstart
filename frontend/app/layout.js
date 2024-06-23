import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: "Ashutosh Srivatsava ",
  description: "for pedalstart assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className}`}>{children}</body>
    </html>
  );
}
