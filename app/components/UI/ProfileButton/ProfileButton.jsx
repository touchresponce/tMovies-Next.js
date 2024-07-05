"use client";

import "./ProfileButton.css";
import { useModals } from "@/store/useModalsStore";

export default function ProfileButton() {
  const { profileModal, openProfileModal, closeProfileModal } = useModals();

  const handleToggle = () => {
    profileModal ? closeProfileModal() : openProfileModal();
  };

  return (
    <button
      className={profileModal ? "profile-button close" : "profile-button"}
      type='button'
      // onClick={handleToggle}
    />
  );
}
