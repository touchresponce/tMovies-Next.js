import "./Form.css";
import { useEffect, useState } from "react";
import { useModals } from "@/store/useModalsStore";
import { mainAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { profileModal } = useModals();
  const { push } = useRouter();

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (!profileModal) {
      handleReset();
    }
  }, [profileModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formAction = e.nativeEvent.submitter.name;
    const data = { email: email, password: password };

    mainAuth(formAction, data);
    push("/profile");
    handleReset();
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
        required
      />
      <input
        className='form__input'
        type='password'
        placeholder='Пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
