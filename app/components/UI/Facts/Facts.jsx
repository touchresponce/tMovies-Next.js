"use client";

import "./Facts.css";

export default function Facts({ data }) {
  const { facts } = data;

  const reg = /<a\b[^>]*>(.*?)<\/a>/gi;

  console.log(data);

  return (
    <div className='facts'>
      <h2 className='facts__title text'>Факты</h2>
      <ul className='facts__list'>
        {facts.map((item, i) => (
          <li className='facts__fact' key={i}>
            {item.value.replace(reg, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}
