import "./AccordionItem.css";
import { useRef, useState } from "react";

export default function AccordionItem({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={`accordion ${isOpen ? "active" : ""}`}>
      <button className='accordion__button' onClick={handleClick}>
        {title}
      </button>
      <div
        ref={panelRef}
        className='accordion__panel'
        style={
          isOpen
            ? { maxHeight: `${panelRef.current.scrollHeight}px` }
            : { maxHeight: null }
        }
      >
        {children}
      </div>
    </div>
  );
}
