"use client";

import "./ProfileSavedMovies.css";
import { useProfile } from "@/store/useProfileStore";
import FastSearchList from "../FastSearchList/FastSearchList";
import MainLoader from "../UI/MainLoader/MainLoader";

export default function ProfileSavedMovies() {
  const { status, moviesByApi } = useProfile();

  if (status === "loading")
    return (
      <section className='profile-saved'>
        <MainLoader />
      </section>
    );

  return (
    <section className='profile-saved'>
      <h1 className='profile-saved__title text'>Смотреть позже</h1>
      <FastSearchList data={moviesByApi} isProfilePage />
    </section>
  );
}
