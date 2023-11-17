import "./page.css";
import { LINKS_MAIN } from "@/utils/constants";
import Slider from "@/app/components/Slider/Slider";
import Genres from "../components/Genres/Genres";

async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

export default async function CatalogPage() {
  const { docs: familyComedy } = await fetchData(LINKS_MAIN.familyComedy);
  const { docs: catastrophe } = await fetchData(LINKS_MAIN.catastrophe);
  const { docs: space } = await fetchData(LINKS_MAIN.space);
  const { docs: comics } = await fetchData(LINKS_MAIN.comics);

  return (
    <>
      <Genres />

      <section className='section-catalog section-catalog__selection'>
        <p className='section-catalog__title text noselect'>Семейные комедии</p>
        <Slider data={familyComedy} horizontal />
      </section>

      <section className='section-catalog section-catalog__selection'>
        <p className='section-catalog__title text noselect'>
          Фильмы про космос
        </p>
        <Slider data={space} horizontal />
      </section>

      <section className='section-catalog section-catalog__selection'>
        <p className='section-catalog__title text noselect'>
          Фильмы по комиксам
        </p>
        <Slider data={comics} horizontal />
      </section>

      <section className='section-catalog section-catalog__selection'>
        <p className='section-catalog__title text noselect'>
          Фильмы-катастрофы
        </p>
        <Slider data={catastrophe} horizontal />
      </section>
    </>
  );
}
