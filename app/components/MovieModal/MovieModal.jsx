"use client";

import "./MovieModal.css";
import closeBtn from "@/public/images/search-close.svg";
import { useModals } from "@/store/useModalsStore.js";
import { useEffect, useRef } from "react";
import useNoScroll from "@/hooks/useNoScroll";
import { getPlayerLink } from "@/utils/actions";

export default function MovieModal({ id }) {
  const { movieModal, closeMovieModal } = useModals();
  const testRef = useRef(null);

  useNoScroll(movieModal);

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const link = await getPlayerLink(id);

        const iframe = document.createElement("iframe");

        iframe.src = link;
        iframe.className = "player";
        iframe.allowFullscreen = true;

        testRef.current?.appendChild(iframe);
      } catch (e) {
        console.error("Error fetching player link:", e);
      }
    };

    fetchLink();
  }, []);

  return (
    <section className={`modal ${movieModal ? "open" : ""}`} ref={testRef}>
      <button
        className="modal__close"
        onClick={closeMovieModal}
        style={{
          backgroundImage: `url(${closeBtn.src})`,
        }}
      />
    </section>
  );
}
