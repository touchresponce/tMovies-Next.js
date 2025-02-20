"use client";

import "./Form.css";
import { useEffect, useRef, useState } from "react";
import { useModals } from "@/store/useModalsStore";
import { mainAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useProfile } from "@/store/useProfileStore";
import { startProgress } from "next-nprogress-bar";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalRef = useRef(null);
  const { profileModal, closeProfileModal } = useModals();
  const { handleGetProfile } = useProfile();
  const { push } = useRouter();

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (!profileModal) {
      handleReset();
    }

    if (profileModal) {
      modalRef.current && modalRef.current.focus();
    }
  }, [profileModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formAction = e.nativeEvent.submitter.name;
    const data = { email: email, password: password };

    try {
      await mainAuth(formAction, data);
      await handleGetProfile();
      startProgress();
      push("/profile");
      handleReset();
      closeProfileModal();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title text'>Типо форма</h2>
      <input
        className='form__input'
        type='text'
        placeholder='Логин'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='off'
        required
        ref={modalRef}
      />
      <input
        className='form__input'
        type='password'
        placeholder='Пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='off'
        required
      />
      <div className='form__buttons-wrapper'>
        <button type='submit' className='form__button' name='signin'>
          Войти
        </button>
        <button type='submit' className='form__button' name='signup'>
          Регистрация
        </button>
      </div>
    </form>
  );
}
