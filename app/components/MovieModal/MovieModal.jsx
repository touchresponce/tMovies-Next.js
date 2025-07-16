"use client";

import "./MovieModal.css";
import closeBtn from "@/public/images/search-close.svg";
import backBtn from "@/public/images/back-btn.svg";
import { useModals } from "@/store/useModalsStore.js";
import { useState } from "react";
import useNoScroll from "@/hooks/useNoScroll";
import { getPlayerLink } from "@/utils/actions";

export default function MovieModal({ id }) {
  const [isFrame, setIsFrame] = useState(false);
  const [playerLink, setPlayerLink] = useState(null);
  const { movieModal, closeMovieModal } = useModals();

  useNoScroll(movieModal);

  const handleClickFrame = async (e) => {
    const providerName = e.target.name;
    const link = await getPlayerLink(id, providerName);
    setPlayerLink(link);
    setIsFrame(true);
  };

  const handleBack = () => {
    setPlayerLink(null);
    setIsFrame(false);
  };

  return (
    <section className={`modal ${movieModal ? "open" : ""}`}>
      {!isFrame ? (
        <div className="modal__buttons-wrapper">
          <h2 className="modal__buttons-title text">Выберите плеер</h2>
          <div className="modal__flex-wrapper">
            <button
              className="panel__button panel__button_type_room text"
              type="button"
              name="COLLAPS"
              onClick={handleClickFrame}
            >
              COLLAPS
            </button>
            <button
              className="panel__button panel__button_type_room text"
              type="button"
              name="LUMEX"
              onClick={handleClickFrame}
            >
              LUMEX
            </button>
          </div>
        </div>
      ) : (
        <>
          <iframe src={playerLink} className="player" allowFullScreen />
          <button
            className="modal__back"
            onClick={handleBack}
            style={{
              backgroundImage: `url(${backBtn.src})`,
            }}
          />
        </>
      )}

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
