"use client";

import "./ProfileButton.css";
import { useModals } from "@/store/useModalsStore";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { startProgress } from "next-nprogress-bar";

export default function ProfileButton() {
  const { profileModal, openProfileModal, closeProfileModal } = useModals();
  const accessToken = !!Cookies.get("accessToken");
  const { push } = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    if (!accessToken) {
      return profileModal ? closeProfileModal() : openProfileModal();
    }

    if (accessToken && pathname !== "/profile") {
      startProgress();
      return push("/profile");
    }
  };

  return (
    <button
      className={profileModal ? "profile-button close" : "profile-button"}
      type='button'
      onClick={handleToggle}
    />
  );
}
