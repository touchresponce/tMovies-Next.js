import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";
import { useFilters } from "@/store/useFiltersStore";

export default function Dropdown({ options, inputType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(options[0].title);
  const dropdownRef = useRef(null);
  const dropdownTextRef = useRef(null);
  const itemRef = useRef(null);
  const { changeFilters } = useFilters();

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
    setIsOpen(!isOpen);
  };

  const handleText = (e, value) => {
    const { textContent } = e.currentTarget;
    setText(textContent);
    setIsOpen(false);
    changeFilters(inputType, value);
  };

  return (
    <div
      className={`dropdown noselect ${isOpen ? "active" : ""}`}
      onClick={handleClick}
      ref={dropdownRef}
    >
      <div className='dropdown__text' ref={dropdownTextRef}>
        {text}
      </div>
      <div className='dropdown__items'>
        {options.map(
          (item) =>
            item.title.toLowerCase() !== text.toLowerCase() && (
              <div
                ref={itemRef}
                onClick={(e) => handleText(e, item.value)}
                className='dropdown__item'
                key={item.value}
              >
                {item.title}
              </div>
            )
        )}
      </div>
    </div>
  );
}
