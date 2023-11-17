import "./page.css";
import { LINKS_MAIN } from "@/utils/constants";
import Slider from "./components/Slider/Slider";
import SliderWithVideo from "./components/SliderWithVideo/SliderWithVideo";
import ShortcutSlider from "./components/ShortcutSlider/ShortcutSlider";

async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

export default async function Home() {
  // const { docs: mainSlider } = await fetchData(LINKS_MAIN.mainSlider);
  const { docs: best } = await fetchData(LINKS_MAIN.best);
  const { docs: popular } = await fetchData(LINKS_MAIN.popular);
  const { docs: cartoons } = await fetchData(LINKS_MAIN.bestCartoons);
  const { docs: catastrophe } = await fetchData(LINKS_MAIN.catastrophe);
  const { docs: space } = await fetchData(LINKS_MAIN.space);

  return (
    <>
      {/* <section className='section section__type_main'>
        <SliderWithVideo data={mainSlider} />
      </section> */}

      <section className='section section__type_genres'>
        <ShortcutSlider />
      </section>

      <section className='section '>
        <p className='section__title text noselect'>Лучшее 2023</p>
        <Slider data={best} />
      </section>

      <section className='section section__type_serials'>
        <p className='section__title text noselect'>Популярные фильмы</p>
        <Slider data={popular} horizontal />
      </section>

      <section className='section'>
        <p className='section__title text noselect'>Фильмы про космос</p>
        <Slider data={space} />
      </section>

      <section className='section'>
        <p className='section__title text noselect'>Фильмы-катастрофы</p>
        <Slider data={catastrophe} horizontal />
      </section>

      <section className='section section__type_cartoons'>
        <p className='section__title text noselect'>Лучшая анимация</p>
        <Slider data={cartoons} />
      </section>
    </>
  );
}
