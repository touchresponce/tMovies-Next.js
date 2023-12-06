"use client";

import "./FastSearchItem.css";
import Link from "next/link";
import Image from "next/image";
import { useModals } from "@/store/useModalsStore";

export default function FastSearchItem({ data }) {
  const { closeSearch } = useModals();
  const { id, rating, name, enName, alternativeName, movieLength, year } = data;
  const title =
    name.slice(0, 40) ||
    enName.slice(0, 40) ||
    alternativeName.slice(0, 40) ||
    "";

  const isHighRating = Math.floor(Number(rating)) > 4 ? "green" : "red";

  return (
    <Link
      href={`/room/${id}`}
      className='fast-search-item'
      onClick={() => closeSearch()}
    >
      <div className='left'>
        <div className='imageContainer'>
          <Image
            fill
            src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`}
            alt={name}
            sizes='(max-width: 768px) 100vw'
          />
        </div>

        <div className='fast-search-item__info'>
          <span className='fast-search-item__title text'>{title}</span>
          <span className='fast-search-item__list'>
            {year}
            {movieLength !== 0 && `, ${movieLength} мин`}
          </span>
        </div>
      </div>

      {typeof rating === "number" && (
        <div className={`right ${isHighRating}`}>
          {Number(rating).toFixed(1)}
        </div>
      )}
    </Link>
  );
}
