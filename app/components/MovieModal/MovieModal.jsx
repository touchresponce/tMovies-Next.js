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
    script.src = "https://kinobox.tv/kinobox.min.js";
    document.body.appendChild(script);

    script.onload = () => {
      new Kinobox(".kinobox_player", {
        search: {
          kinopoisk: id,
        },
        players: {
          Alloha: { enable: true, position: 2, token: "{token}" },
          Collaps: { enable: true, position: 1, token: "{token}" },
          Bazon: { enable: true, position: 3, token: "{token}" },
          Cdnmovies: { enable: true, position: 4, token: "{token}" },
          Hdvb: { enable: true, position: 5, token: "{token}" },
          Iframe: { enable: true, position: 6, token: "{token}" },
          Kodik: { enable: true, position: 7, token: "{token}" },
          Videocdn: { enable: true, position: 8, token: "{token}" },
          Voidboost: { enable: true, position: 9, token: "{token}" },
        },
      }).init();
    };

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
      {/* KINOBOX */}
      <div className='kinobox_player' />
      {/*  */}
    </section>
  );
}
