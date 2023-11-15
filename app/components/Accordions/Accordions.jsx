"use client";

import "./Accordions.css";
import MovieInfo from "../MovieInfo/MovieInfo";
import Crew from "../Crew/Crew";
import Fees from "../UI/Fees/Fees";
import AccordionItem from "../UI/AccordionItem/AccordionItem";

export default function Accordions({ data }) {
  const isEmptyFees = (obj) => {
    if (obj !== null && typeof obj === "object") {
      return Object.values(obj).some(
        (val) => typeof val === "object" && Object.keys(val).length > 0
      );
    }
  };

  return (
    <div className='accordions'>
      <AccordionItem title={"Информация"}>
        <MovieInfo data={data} />
      </AccordionItem>

      <AccordionItem title={"Съёмочная группа"}>
        <Crew data={data} />
      </AccordionItem>

      {isEmptyFees(data.fees) && (
        <AccordionItem title={"Сборы"}>
          <Fees data={data} />
        </AccordionItem>
      )}
    </div>
  );
}
