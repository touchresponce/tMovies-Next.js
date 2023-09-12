import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FastSearch from "./components/FastSearch/FastSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Смотреть фильмы онлайн в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре Tastemovies",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className='page'>
          <Header />
          <main className='main'>{children}</main>
          <Footer />
        </div>
        <FastSearch />
      </body>
    </html>
  );
}
