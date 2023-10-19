"use client";

import "./Filters.css";
import {
  OPTIONS_GENRES,
  OPTIONS_RATING,
  OPTIONS_YEARS,
  OPTIONS_ORDER,
} from "@/utils/constants";
import Dropdown from "../UI/Dropdown/Dropdown";

export default function Filters() {
  return (
    <section className='fitlers'>
      <Dropdown options={OPTIONS_GENRES} inputType='genre' />
      <Dropdown options={OPTIONS_RATING} inputType='rating' />
      <Dropdown options={OPTIONS_YEARS} inputType='year' />
      <Dropdown options={OPTIONS_ORDER} inputType='order' />
    </section>
  );
}
