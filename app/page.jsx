import "./page.css";
import Slider from "./components/Slider/Slider";
import ThemeSlider from "./components/ThemeSlider/ThemeSlider";
import { LINKS_MAIN } from "@/utils/constants";

async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

export default async function Home() {
  const { docs: serials } = await fetchData(LINKS_MAIN.serials);
  const { docs: cartoons } = await fetchData(LINKS_MAIN.cartoons);
  const { docs: comedy } = await fetchData(LINKS_MAIN.comedy);
  const { docs: family } = await fetchData(LINKS_MAIN.family);
  const { docs: best } = await fetchData(LINKS_MAIN.best);

  return (
    <>
      <section className='section section__type_movies'>
        <p className='section__title text noselect'>Лучшее 2023</p>
        <Slider data={best} />
      </section>

      {/* <section className='section section__type_relative'> */}
      {/* <ThemeSlider /> */}
      {/* </section> */}

      <section className='section section__type_horizontal'>
        <p className='section__title text noselect'>Комедийные фильмы</p>
        <Slider data={comedy} horizontal />
      </section>

      <section className='section section__type_horizontal'>
        <p className='section__title text noselect'>Для семейного просмотра</p>
        <Slider data={family} horizontal />
      </section>

      <section className='section section__type_serials'>
        <p className='section__title text noselect'>Сериалы</p>
        <Slider data={serials} />
      </section>

      <section className='section section__type_cartoons'>
        <p className='section__title text noselect'>Мультфильмы</p>
        <Slider data={cartoons} />
      </section>
    </>
  );
}
