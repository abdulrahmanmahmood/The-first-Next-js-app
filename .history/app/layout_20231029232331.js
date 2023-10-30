import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            width: "100%",
            background: "teal",
            fontSize: "30px",
            height: "80px",
            display: "flex",
            // flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <ul            style={{
            width: "100%",
            background: "teal",
            fontSize: "30px",
            height: "80px",
            display: "flex",
            // flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <li>
              <Link href="/posts">posts</Link>
            </li>
            <li>
              <Link href="/articles">articles</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
