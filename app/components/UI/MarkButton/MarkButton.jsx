"use client";

import "./MarkButton.css";
import { useProfile } from "@/store/useProfileStore";
import { useModals } from "@/store/useModalsStore";
import { useEffect, useState } from "react";

export default function MarkButton({ id }) {
  const { profile, handleSaveMovie, handleDeleteMovie } = useProfile();
  const { openProfileModal } = useModals();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!profile) return;

    profile.savedMovies?.some((movie) => movie.movieId === id)
      ? setIsSaved(true)
      : setIsSaved(false);
  }, [profile]);

  const handleClick = async () => {
    if (!profile) return openProfileModal();

    isSaved ? await handleDeleteMovie(id) : await handleSaveMovie(id);
  };

  return (
    <button
      type='button'
      className={`mark-button ${isSaved ? "mark-button__active" : ""}`}
      onClick={handleClick}
      //
      disabled
      //
    >
      <span className='mark-button__span' />
    </button>
  );
}
