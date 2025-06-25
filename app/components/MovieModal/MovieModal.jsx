"use client";

import "./MovieModal.css";
import closeBtn from "@/public/images/search-close.svg";
import { useModals } from "@/store/useModalsStore.js";
import { useEffect } from "react";
import useNoScroll from "@/hooks/useNoScroll";

export default function MovieModal({ id }) {
  const { movieModal, closeMovieModal } = useModals();

  useNoScroll(movieModal);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobd.net/js/player_.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [id]);

  return (
    <section className={`modal ${movieModal ? "open" : ""}`}>
      <button
        className='modal__close'
        onClick={closeMovieModal}
        style={{
          backgroundImage: `url(${closeBtn.src})`,
        }}
      />
      {/* PLAYER */}
      <div id="kinobd" className="player" data-kinopoisk={id} />
      {/*  */}
    </section>
  );
}
