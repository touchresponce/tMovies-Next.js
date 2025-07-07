"use client";

import "./MovieModal.css";
import closeBtn from "@/public/images/search-close.svg";
import { useModals } from "@/store/useModalsStore.js";
import { useEffect, useState } from "react";
import useNoScroll from "@/hooks/useNoScroll";
import { getPlayerLink } from "@/utils/actions";

export default function MovieModal({ id }) {
  const [playerLink, setPlayerLink] = useState("");
  const { movieModal, closeMovieModal } = useModals();

  useNoScroll(movieModal);

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const link = await getPlayerLink(id);
        setPlayerLink(link);
      } catch (e) {
        console.error("Error fetching player link:", e);
      }
    };

    fetchLink();
  }, []);

  return (
    <section className={`modal ${movieModal ? "open" : ""}`}>
      <button
        className="modal__close"
        onClick={closeMovieModal}
        style={{
          backgroundImage: `url(${closeBtn.src})`,
        }}
      />
      {playerLink && <iframe className="player" src={playerLink} />}
    </section>
  );
}
