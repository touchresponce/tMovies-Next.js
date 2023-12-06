"use client";

import "./error.css";
import MoreButton from "./components/UI/MoreButton/MoreButton";

export default function Error({ error, reset }) {
  return (
    <div className='error noselect'>
      <h2 className='error__title text'>Что-то пошло не так :(</h2>
      {/* <MoreButton title='Повторить' onCLick={() => reset()} /> */}
      <button onClick={() => reset()}></button>
    </div>
  );
}
