import "./Test.css";
import Image from "next/image";
import formatDate from "@/utils/formatDate";

export default function Test({ data }) {
  const { name, enName, photo, age, death, birthday } = data;

  const birthPlace =
    data.birthPlace !== null && data.birthPlace.map((x) => x.value).join(" ");

  const profession =
    data.profession !== null && data.profession.map((x) => x.value).join(" ");

  return (
    <section className='person-info'>
      <div className='person-info__image'>
        {photo !== null && (
          <Image
            src={photo}
            alt={`фотография ${name}`}
            fill
            priority
            sizes='(max-width: 768px) 100vw'
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
      <div className='person'>
        <h1 className='person__name text'>{name}</h1>
        <h2 className='person__engname text'>{enName}</h2>

        {birthday !== null && <p className='text'>{formatDate(birthday)}</p>}
        {death !== null && <p className='text'>{formatDate(death)}</p>}
        {age !== null && <p className='text'>{age} лет</p>}

        <p className='text'>{birthPlace}</p>
        <p className='text'>{profession}</p>
      </div>
    </section>
  );
}
