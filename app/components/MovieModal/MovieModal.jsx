"use client";

import "./MovieModal.css";
import closeBtn from "@/public/images/search-close.svg";
import { useModals } from "@/store/useModalsStore.js";
import { useEffect } from "react";

export default function MovieModal({ id }) {
  const { movieModal, closeMovieModal } = useModals();

  useEffect(() => {
    document.querySelector(".room__video").setAttribute("data-kinopoisk", id);

    const script = document.createElement("script");
    script.src = "https://kinobd.net/js/player_.js";
    document.body.appendChild(script);

    return () => {
      script.remove();
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
      {/* content */}
      <div className='room'>
        <div className='room__container'>
          <div className='room__video' id='kinobd' />
        </div>
      </div>
      {/*  */}
    </section>
  );
}
