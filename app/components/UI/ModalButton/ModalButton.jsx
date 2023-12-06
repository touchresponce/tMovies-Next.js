"use client";

import "./ModalButton.css";
import { useModals } from "@/store/useModalsStore";
import { formatTypeText } from "@/utils/formatTypeText";

export default function ModalButtons({ type }) {
  const { openMovieModal } = useModals();

  const buttonText = `Смотреть ${formatTypeText(type)}`;

  return (
    <button
      className='panel__button panel__button_type_room'
      type='button'
      onClick={() => openMovieModal()}
    >
      {buttonText}
    </button>
  );
}
