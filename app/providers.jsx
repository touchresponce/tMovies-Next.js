"use client";

import { Suspense, useEffect } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useProfile } from "@/store/useProfileStore";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Providers({ children }) {
  const { profile, handleGetProfile, handleGetSavedMovies } = useProfile();
  const accessToken = Cookies.get("accessToken");
  const pathname = usePathname();

  useEffect(() => {
    if (!accessToken) return;
    if (!profile) handleGetProfile();
  }, [pathname]);

  useEffect(() => {
    if (profile) handleGetSavedMovies();
  }, [profile]);

  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height='4px'
          color='#0A2FFF'
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
}
