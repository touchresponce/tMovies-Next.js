import "./page.css";
import TypeItem from "../components/UI/TypeItem/TypeItem";

export default async function CatalogPage() {
  return (
    <>
      <section className='section section__genres'>
        <TypeItem type='movie' />
        <TypeItem type='tv-series' />
        <TypeItem type='cartoon' />
        <TypeItem type='anime' />
      </section>
    </>
  );
}
