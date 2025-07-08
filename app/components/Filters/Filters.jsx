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
    <section
      className={containsPath ? "filters" : "filters wrap-space"}
      style={{
        flexDirection: containsPath ? "column" : "row",
      }}
    >
      {containsPath ? (
        <>
          <h1 className="text noselect filters__title">{title}</h1>
          <div className="filters__wrapper">
            <Dropdown options={OPTIONS_GENRES} inputType="genre" />
            <Dropdown options={OPTIONS_RATING} inputType="rating" />
            <Dropdown options={OPTIONS_YEARS} inputType="year" />
            <Dropdown options={OPTIONS_ORDER} inputType="order" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text noselect filters__title filters__title_type_second">
            {title}
          </h1>
          <Dropdown options={OPTIONS_ORDER} inputType="order" />
        </>
      )}
    </section>
  );
}
