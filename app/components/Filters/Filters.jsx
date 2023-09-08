"use client";

import "./Filters.css";
import {
  OPTIONS_GENRES,
  OPTIONS_RATING,
  OPTIONS_YEARS,
  OPTIONS_ORDER,
} from "@/utils/constants";
import Dropdown from "../UI/Dropdown/Dropdown";
import { useState, useEffect, useCallback } from "react";

export default function Filters() {
  // const [lol, setLol] = useState(window.innerWidth <= 760);

  // const resizeWindow = useCallback(() => {
  //   setLol(window.innerWidth <= 760);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", resizeWindow);
  //   return () => window.removeEventListener("resize", resizeWindow);
  // }, []);

  return (
    // <section className={!lol ? "x" : "x-block"}>
    <section className='x'>
      <Dropdown
        name={OPTIONS_GENRES[0].value}
        options={OPTIONS_GENRES}
        inputType='genre'
      />
      <Dropdown
        name={OPTIONS_RATING[0].value}
        options={OPTIONS_RATING}
        inputType='rating'
      />
      <Dropdown
        name={OPTIONS_YEARS[0].value}
        options={OPTIONS_YEARS}
        inputType='year'
      />
      <Dropdown
        name={OPTIONS_ORDER[0].value}
        options={OPTIONS_ORDER}
        inputType='order'
      />
    </section>
  );
}
