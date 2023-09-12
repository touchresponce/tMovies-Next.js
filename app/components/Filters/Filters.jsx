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
