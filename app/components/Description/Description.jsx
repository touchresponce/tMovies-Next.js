import "./Description.css";

export default function Description({ data }) {
  const { description } = data;

  return (
    <section className='description'>
      <h2 className='description__title text'>Сюжет</h2>
      <p className='description__text text'>{description}</p>
    </section>
  );
}
