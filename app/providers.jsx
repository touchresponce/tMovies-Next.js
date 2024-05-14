"use client";

import { Suspense } from "react";
import { Next13ProgressBar } from "next13-progressbar";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <Suspense>
        <Next13ProgressBar
          height='4px'
          color='#0A2FFF'
          options={{ showSpinner: false }}
          showOnShallow
        />
      </Suspense>
    </>
  );
}
