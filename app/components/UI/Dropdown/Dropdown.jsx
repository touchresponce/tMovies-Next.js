import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";
import { useFilters } from "@/store/useFiltersStore";
import { useSearch } from "@/store/useSearchStore";

export default function Dropdown({ options, inputType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(options[0].title);
  const { changeFilter } = useFilters();
  const { status } = useSearch();
  const dropdownRef = useRef(null);
  const dropdownTextRef = useRef(null);
  const itemRef = useRef(null);

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
    changeFilter(inputType, value);
  };

  return (
    <button
      type='button'
      disabled={status === "loading"}
      className={`dropdown noselect ${isOpen ? "active" : ""}`}
      onClick={handleClick}
      ref={dropdownRef}
    >
      <div className='dropdown__inner'>
        <div className='dropdown__mask'></div>
        <div className='dropdown__text' ref={dropdownTextRef}>
          {text}
        </div>
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
    </button>
  );
}
