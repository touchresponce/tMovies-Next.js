import "./globals.css";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Providers from "./providers";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tastemovies",
  description:
    "Смотреть фильмы онлайн в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

const FastSearch = dynamic(() => import("./components/FastSearch/FastSearch"), {
  ssr: false,
});

const Sidebar = dynamic(() => import("./components/Sidebar/Sidebar"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <ErrorBoundary fallback={<Error />}>
          <Providers>
            <div className='page'>
              <Header />
              <main className='main'>{children}</main>
              {/* <Footer /> */}
            </div>
            <FastSearch />
            <Sidebar />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
