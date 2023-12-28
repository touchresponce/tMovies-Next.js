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

  const isHighRating = Math.floor(Number(rating.kp)) > 4 ? "green" : "red";

  const renderLenght = () => {
    if (typeof movieLength === "number" && movieLength !== 0) {
      return `, ${movieLength} мин`;
    }
  };

  const renderColorRating = () => {
    if (typeof rating.kp === "number" && rating.kp !== 0) {
      return (
        <div className={`right ${isHighRating}`}>
          {Number(rating.kp).toFixed(1)}
        </div>
      );
    }
  };

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
            priority
            src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`}
            alt={name}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        <div className='fast-search-item__info'>
          <span className='fast-search-item__title text'>{title}</span>
          <span className='fast-search-item__list'>
            {year}
            {renderLenght()}
          </span>
        </div>
      </div>

      {renderColorRating()}
    </Link>
  );
}
