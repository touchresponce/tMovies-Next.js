"use client";

import "./Accordions.css";
import MovieInfo from "../MovieInfo/MovieInfo";
import Crew from "../Crew/Crew";
import Fees from "../UI/Fees/Fees";
import AccordionItem from "../UI/AccordionItem/AccordionItem";

export default function Accordions({ data }) {
  const isEmptyFees = (obj) => {
    if (obj && typeof obj === "object" && Object.keys(obj).length > 0) {
      for (let key in obj) {
        if (
          obj[key] &&
          typeof obj[key] === "object" &&
          Object.keys(obj[key]).length > 0
        ) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const renderFees = () => {
    if (!isEmptyFees(data.fees)) return;

    return (
      <AccordionItem title={"Сборы"}>
        <Fees data={data} />
      </AccordionItem>
    );
  };

  return (
    <div className='accordions'>
      <AccordionItem title={"Информация"}>
        <MovieInfo data={data} />
      </AccordionItem>

      <AccordionItem title={"Съёмочная группа"}>
        <Crew data={data} />
      </AccordionItem>

      {renderFees()}
    </div>
  );
}
