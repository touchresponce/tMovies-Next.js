"use client";

import "./ModalButton.css";
import { useModals } from "@/store/useModalsStore";
import { formatTypeText } from "@/utils/formatTypeText";

export default function ModalButtons({ type }) {
  const { openMovieModal } = useModals();

  return (
    <button
      className='panel__button panel__button_type_room'
      onClick={() => openMovieModal()}
    >
      Смотреть {formatTypeText(type)}
    </button>
  );
}
