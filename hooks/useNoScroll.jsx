import { useEffect } from "react";

export default function useNoScroll(state) {
  useEffect(() => {
    state && document.body.classList.add("noscroll");
    !state && document.body.classList.remove("noscroll");

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [state]);
}
