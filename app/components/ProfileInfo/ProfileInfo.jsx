"use client";

import "./ProfileInfo.css";
import { useProfile } from "@/store/useProfileStore";
import ProfileLogoutButton from "../UI/ProfileLogoutButton/ProfileLogoutButton";
import { formatDate } from "@/utils/formatFunctions";

export default function ProfileInfo() {
  const { profile, status } = useProfile();

  if (status === "loading" || !profile) return;

  return (
    <section className='profile-info'>
      <div>Email: {profile.email}</div>
      <div>Регистрация {formatDate(profile.createdAt)}</div>
      <ProfileLogoutButton />
      <div>{profile.id}</div>
    </section>
  );
}
