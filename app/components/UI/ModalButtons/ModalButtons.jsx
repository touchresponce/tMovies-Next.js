"use client";

import "./ModalButtons.css";

export default function ModalButtons({ type, openModal }) {
  const getTypeText = () => {
    switch (type) {
      case "movie":
        return "фильм";

      case "tv-series":
        return "сериал";

      case "anime":
        return "аниме";

      case "cartoon":
        return "мультфильм";

      default:
        return "";
    }
  };

  return (
    <div className='panel noselect'>
      <button
        className='panel__button panel__button_type_room'
        onClick={() => openModal("movie")}
      >
        Смотреть {getTypeText()}
      </button>
      <button
        className='panel__button panel__button_type_trailer'
        onClick={() => openModal("iframe")}
      >
        Трейлер
      </button>
    </div>
  );
}
