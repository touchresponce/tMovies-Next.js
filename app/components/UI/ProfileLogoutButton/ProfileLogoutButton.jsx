"use client";

import "./ProfileLogoutButton.css";
import { useProfile } from "@/store/useProfileStore";
import { startProgress } from "next-nprogress-bar";

export default function ProfileLogoutButton() {
  const { handleLogoutProfile } = useProfile();

  const handleLogout = () => {
    startProgress();
    handleLogoutProfile();
    window.location.reload();
  };

  return (
    <button type='button' onClick={handleLogout}>
      LOGOUT
    </button>
  );
}
