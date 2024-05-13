"use client";

import "./ModalButton.css";
import { useModals } from "@/store/useModalsStore";
import { useMemo } from "react";

export default function ModalButtons({ type }) {
  const { openMovieModal } = useModals();

  const buttonText = useMemo(() => {
    switch (type) {
      case "movie":
        return "Смотреть фильм";
      case "tv-series":
      case "animated-series":
        return "Смотреть сериал";
      case "anime":
        return "Смотреть аниме";
      case "cartoon":
        return "Смотреть мультфильм";
      default:
        return "Смотреть";
    }
  }, [type]);

  return (
    <button
      className='panel__button panel__button_type_room'
      type='button'
      onClick={openMovieModal}
    >
      {buttonText}
    </button>
  );
}
