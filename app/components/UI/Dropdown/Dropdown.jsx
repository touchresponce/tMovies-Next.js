import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filtersActions } from "../../store/filtersSlice";
import {
  //   CURRENT_YEAR,
  OPTIONS_GENRES,
  OPTIONS_RATING,
  OPTIONS_YEARS,
  OPTIONS_ORDER,
} from "@/utils/constants";

export default function Dropdown({ name, options, inputType }) {
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const dropdownRef = useRef(null);
  const dropdownTextRef = useRef(null);
  // const { status } = useSelector((state) => state.search);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    // status !== "loading" && setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  // const handleText = (e) => {
  //   const { textContent } = e.currentTarget;
  //   setText(textContent);
  //   setIsOpen(false);

  //   switch (textContent) {
  //     case OPTIONS_GENRES[0].value:
  //     case OPTIONS_ORDER[0].value:
  //       dispatch(
  //         filtersActions.changeFiltersState({ name: inputType, value: "" })
  //       );
  //       break;

  //     case OPTIONS_RATING[0].value:
  //       dispatch(
  //         filtersActions.changeFiltersState({ name: inputType, value: "1-10" })
  //       );
  //       break;

  //     case OPTIONS_YEARS[0].value:
  //       dispatch(
  //         filtersActions.changeFiltersState({
  //           name: inputType,
  //           value: `1960-${CURRENT_YEAR}`,
  //         })
  //       );
  //       break;

  //     default:
  //       dispatch(
  //         filtersActions.changeFiltersState({
  //           name: inputType,
  //           value: textContent.toLowerCase(),
  //         })
  //       );
  //       break;
  //   }
  // };

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
          <div
            // onClick={handleText}
            className='dropdown__item'
            key={item.id}
          >
            {item.value[0].toUpperCase() + item.value.substring(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
