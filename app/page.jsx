import "./page.css";
import Slider from "./components/Slider/Slider";
import ThemeSlider from "./components/ThemeSlider/ThemeSlider";

async function getMovies() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&page=1&limit=30&name=!null&type=movie&year=2022-2023&rating.kp=5-10&rating.imdb=5-10&poster.previewUrl=!null",
    {
      headers: {
        "X-API-KEY": process.env.KEY,
      },
    }
  );
  return responce.json();
}

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

export default async function Home() {
  const { docs: movies } = await getMovies();
  const { docs: serials } = await getSerials();
  const { docs: cartoons } = await getCartoons();

  return (
    <>
      <section className='section section__type_movies'>
        <p className='section__title text'>Фильмы</p>
        <Slider data={movies} />
      </section>

      {/* <section className='section section__type_relative'> */}
      {/* <ThemeSlider /> */}
      {/* </section> */}

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
