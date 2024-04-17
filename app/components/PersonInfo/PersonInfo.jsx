import "./PersonInfo.css";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import formatAge from "@/utils/formatAge";

export default function PersonInfo({ data }) {
  const { name, enName, photo, age, death, birthday } = data;

  const birthPlace =
    data.birthPlace !== null && data.birthPlace?.map((x) => x.value).join(" ");

  const profession =
    data.profession !== null && data.profession?.map((x) => x.value).join(" ");

  return (
    <section className='person-info'>
      <div className='person-info__image'>
        {photo !== null && (
          <Image
            src={photo}
            alt={`фотография ${name}`}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </div>
      <div className='person'>
        <h1 className='person__name text'>{name}</h1>
        <h2 className='person__engname text'>{enName}</h2>

        {birthday !== null && <p className='text'>{formatDate(birthday)}</p>}
        {death !== null && <p className='text'>{formatDate(death)}</p>}
        {age !== null && <p className='text'>{formatAge(age)}</p>}

        <p className='text'>{birthPlace}</p>
        <p className='text'>{profession}</p>
      </div>
    </section>
  );
}
