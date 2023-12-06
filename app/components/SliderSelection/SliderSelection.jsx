import "./SliderSelection.css";
import Link from "next/link";
import Slider from "../Slider/Slider";

export default function SliderSelection({
  data,
  title,
  selection,
  horizontal = false,
}) {
  return (
    <section className='selection'>
      <Link
        href={`/catalog/selection/${selection}`}
        className='selection__title text noselect'
      >
        {title}
        <span className='selection__span'>›</span>
      </Link>

      <Slider data={data} horizontal={horizontal} />
    </section>
  );
}
