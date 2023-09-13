"use client";

import "./ModalButtons.css";
import { useModals } from "@/store/useModalsStore";
import { formatTypeText } from "@/utils/formatTypeText";

export default function ModalButtons({ type }) {
  const { openMovieModal } = useModals();

  return (
    <div className='panel noselect'>
      <button
        className='panel__button panel__button_type_room'
        onClick={() => openMovieModal()}
      >
        Смотреть {formatTypeText(type)}
      </button>
      <button
        className='panel__button panel__button_type_trailer'
        // onClick={() => openModal("iframe")}
      >
        Трейлер
      </button>
    </div>
  );
}
