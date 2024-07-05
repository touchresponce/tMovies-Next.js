"use client";

import "./ProfileModal.css";
import { useModals } from "@/store/useModalsStore.js";
import useNoScroll from "@/hooks/useNoScroll";
import useEscClose from "@/hooks/useEscClose";
import Form from "../Form/Form";

export default function ProfileModal() {
  const { profileModal, closeProfileModal } = useModals();

  useNoScroll(profileModal);
  useEscClose(closeProfileModal);

  return (
    <div
      className={`profile-modal ${
        profileModal ? "profile-modal_mod_open" : ""
      } scrollbar`}
    >
      <div className='profile-modal__rings noselect'>
        <i className='profile-modal__ring' />
        <i className='profile-modal__ring' />
        <i className='profile-modal__ring' />
        <Form />
      </div>
    </div>
  );
}
