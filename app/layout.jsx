import "./globals.css";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import Providers from "./providers";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
// import Footer from "./components/Footer/Footer";
import FastSearch from "./components/FastSearch/FastSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tastemovies",
  description:
    "Смотреть фильмы онлайн в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

// const FastSearch = dynamic(() => import("./components/FastSearch/FastSearch"), {
//   ssr: false,
// });

const Sidebar = dynamic(() => import("./components/Sidebar/Sidebar"), {
  ssr: false,
});

const ProfileModal = dynamic(
  () => import("./components/ProfileModal/ProfileModal"),
  {
    ssr: false,
  }
);

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
            <ProfileModal />
            <FastSearch />
            <Sidebar />
            <Toaster
              theme='dark'
              position='bottom-left'
              duration={3500}
              expand='true'
              style={{ filter: "drop-shadow(0 0 0.65rem rgb(10, 47, 255))" }}
            />
          </Providers>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
