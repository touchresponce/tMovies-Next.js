import Actors from "../UI/Actors/Actors";
import "./AdditionalInfo.css";

export default function AdditionalInfo({ data }) {
  const { description } = data;

  return (
    <section className='additional'>
      <div className='additional__wrapper'>
        <div className='additional__item'>
          <p className='additional__title text'>Сюжет</p>
          <p className='text'>{description}</p>
        </div>

        <div className='additional__item'>
          <p className='additional__title text'>Сборы</p>
          <p className='text'>12121212121olololo</p>
        </div>
      </div>

      <div className='additional__actors'>
        <p className='additional__title text'>Актёры</p>
        <Actors data={data} />
      </div>
    </section>
  );
}
