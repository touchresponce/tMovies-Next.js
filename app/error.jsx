"use client";

import "./error.css";

export default function Error({ error, reset }) {
  return (
    <div className='error noselect'>
      <h2 className='error__title text'>Что-то пошло не так :(</h2>
    </div>
  );
}
