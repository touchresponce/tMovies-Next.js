import "./Test.css";
import Image from "next/image";
import formatDate from "@/utils/formatDate";

export default function Test({ data }) {
  const { profession, name, enName, photo, birthPlace, age, death, birthday } =
    data;

  return (
    <section className='person-info'>
      <div className='person-info__image'>
        {photo !== null && (
          <Image
            src={photo}
            alt={`фотография ${name}`}
            fill
            sizes='(max-width: 768px) 100vw'
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
            }}
            priority={true}
          />
        )}
      </div>
      <div className='person'>
        <h1 className='person__name text'>{name}</h1>
        <h2 className='person__engname text'>{enName}</h2>

        {birthday !== null && <p className='text'>{formatDate(birthday)}</p>}
        {death !== null && <p className='text'>{formatDate(death)}</p>}
        {age !== null && <p className='text'>{age} лет</p>}

        {birthPlace !== null && (
          <p className='text'>{birthPlace.map((item, i) => `${item.value}`)}</p>
        )}
        {profession !== null && (
          <p className='text'>
            {profession.map((item, i) => `${item.value} `)}
          </p>
        )}
      </div>
    </section>
  );
}
