import "./PersonInfo.css";
import Image from "next/image";
import formatDate from "@/utils/formatFunctions/formatDate";
import formatAge from "@/utils/formatFunctions/formatAge";

export default function PersonInfo({ data }) {
  const { name, enName, photo, age, death, birthday } = data;

  const birthPlace =
    data.birthPlace !== null && data.birthPlace?.map((x) => x.value).join(" ");

  const profession =
    data.profession !== null && data.profession?.map((x) => x.value).join(" ");

  function renderLifetime(birthday, death, age) {
    if (!birthday && !death) {
      return null;
    }

    const formattedBirthday = birthday ? formatDate(birthday) : "";
    const formattedDeath = death ? ` - ${formatDate(death)}` : "";
    const formattedAge = age !== undefined ? `${formatAge(age)}` : "";

    // Если дата смерти не указана, отображаем только дату рождения и возраст
    if (!death) {
      return (
        <>
          <p className='person-info__date text'>
            {formattedBirthday} (
            <span className='person-info__span'>{formattedAge}</span>)
          </p>
        </>
      );
    }

    // Если указаны обе даты, отображаем диапазон жизни и возраст
    return (
      <>
        <p className='person-info__date text'>
          {formattedBirthday}
          {formattedDeath} (
          <span className='person-info__span'>{formattedAge}</span>)
        </p>
      </>
    );
  }

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
        {renderLifetime(birthday, death, age)}
        <p className='text'>{birthPlace}</p>
        <p className='text'>{profession}</p>
      </div>
    </section>
  );
}
