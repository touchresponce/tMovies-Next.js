import "./globals.css";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Header from "./components/Header/Header";
import Providers from "./providers";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import FastSearch from "./components/FastSearch/FastSearch";
import ProfileModal from "./components/ProfileModal/ProfileModal";
import Sidebar from "./components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tastemovies",
  description:
    "Смотреть фильмы онлайн в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

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
