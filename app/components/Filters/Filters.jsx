"use client";

import "./Filters.css";
import {
  OPTIONS_GENRES,
  OPTIONS_RATING,
  OPTIONS_YEARS,
  OPTIONS_ORDER,
} from "@/utils/constants";
import Dropdown from "../UI/Dropdown/Dropdown";
import { usePathname } from "next/navigation";

export default function Filters({ title }) {
  const pathname = usePathname();
  const path = [
    "/catalog/movie",
    "/catalog/tv-series",
    "/catalog/cartoon",
    "catalog/anime",
  ];
  const containsPath = path.some((item) => pathname.includes(item));

  return (
    <section className='fitlers'>
      {containsPath ? (
        <>
          <Dropdown options={OPTIONS_GENRES} inputType='genre' />
          <Dropdown options={OPTIONS_RATING} inputType='rating' />
          <Dropdown options={OPTIONS_YEARS} inputType='year' />
        </>
      ) : (
        <h1 className='text noselect filters__title'>{title}</h1>
      )}
      <Dropdown options={OPTIONS_ORDER} inputType='order' />
    </section>
  );
}
