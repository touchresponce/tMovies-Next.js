import "./page.css";
import Slider from "./components/Slider/Slider";
import ThemeSlider from "./components/ThemeSlider/ThemeSlider";

async function getSerials() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&rating.kp=5-10&rating.imdb=5-10&year=2022-2023&type=tv-series&limit=30&page=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

async function getCartoons() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&rating.kp=5-10&rating.imdb=5-10&year=2022-2023&type=cartoon&limit=30&page=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

async function getComedy() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?selectFields=id&selectFields=backdrop&selectFields=logo&selectFields=name&selectFields=enName&selectFields=alternativeName&sortField=votes.imdb&sortType=-1&page=1&limit=20&type=movie&rating.imdb=6-10&logo.url=!null&backdrop.previewUrl=!null&genres.name=комедия&genres.name=!драма",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

async function getFamily() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?selectFields=id&selectFields=backdrop&selectFields=logo&selectFields=name&selectFields=enName&selectFields=alternativeName&sortField=votes.kp&sortType=-1&page=1&limit=20&type=movie&rating.imdb=6-10&logo.url=!null&backdrop.previewUrl=!null&genres.name=семейный",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

async function getBest() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?sortField=votes.imdb&sortType=-1&limit=30&year=2023&rating.imdb=6.6-10&name=!null&poster.previewUrl=!null&countries.name=!Россия",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

export default async function Home() {
  const { docs: serials } = await getSerials();
  const { docs: cartoons } = await getCartoons();
  const { docs: comedy } = await getComedy();
  const { docs: family } = await getFamily();
  const { docs: best } = await getBest();

  return (
    <>
      <section className='section section__type_movies'>
        <p className='section__title text'>Лучшее 2023</p>
        <Slider data={best} />
      </section>

      {/* <section className='section section__type_relative'>
      <ThemeSlider data={} />
      </section> */}

      <section className='section section__type_horizontal'>
        <p className='section__title text'>Комедийные фильмы</p>
        <Slider data={comedy} horizontal />
      </section>

      <section className='section section__type_horizontal'>
        <p className='section__title text'>Для семейного просмотра</p>
        <Slider data={family} horizontal />
      </section>

      <section className='section section__type_serials'>
        <p className='section__title text'>Сериалы</p>
        <Slider data={serials} />
      </section>

      <section className='section section__type_cartoons'>
        <p className='section__title text'>Мультфильмы</p>
        <Slider data={cartoons} />
      </section>
    </>
  );
}
