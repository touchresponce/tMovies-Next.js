import "./AdditionalInfo.css";

export default function AdditionalInfo({ data }) {
  return (
    <section className='additional'>
      <div className='additional__description'>
        <p className='additional__title text'>Сюжет</p>
        <p className='text'>{data.description}</p>
      </div>
      <div className='additional__material'>
        <p className='additional__title text'>Факты</p>
      </div>
    </section>
  );
}
