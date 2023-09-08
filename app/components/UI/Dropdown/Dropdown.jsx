import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";
import {
  OPTIONS_GENRES,
  OPTIONS_RATING,
  OPTIONS_YEARS,
  OPTIONS_ORDER,
} from "@/utils/constants";
import { useFilters } from "@/store";

export default function Dropdown({ name, options, inputType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const dropdownRef = useRef(null);
  const dropdownTextRef = useRef(null);
  const { resetOne, changeFilters } = useFilters((state) => state);

  // const { link } = useFilters((state) => state);
  // useEffect(() => console.log(link), [link]);

  // const handleClickOutside = (e) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleText = (e) => {
    const { textContent } = e.currentTarget;
    setText(textContent);
    setIsOpen(false);

    switch (textContent) {
      // снос фильтров в умолчание
      case OPTIONS_GENRES[0].value:
      case OPTIONS_RATING[0].value:
      case OPTIONS_YEARS[0].value:
      case OPTIONS_ORDER[0].value:
        resetOne(inputType);
        break;

      // иначе замена фильтра
      default:
        changeFilters(inputType, textContent.toLowerCase());
        break;
    }
  };

  return (
    <div
      className={isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
      ref={dropdownRef}
    >
      <div className='dropdown__text' ref={dropdownTextRef}>
        {!text ? name : text}
      </div>
      <div className='dropdown__items'>
        {options?.map((item) => (
          <div onClick={handleText} className='dropdown__item' key={item.id}>
            {item.value[0].toUpperCase() + item.value.substring(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
