"use client";
import "./ArrowsDownButton.css";

export default function ArrowsDownButton() {
  const handleScroll = (e) => {
    e.preventDefault();

    const elem = document.querySelector(".selection");

    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button className='arrow' onClick={handleScroll}>
      <span />
      <span />
      <span />
    </button>
  );
}
