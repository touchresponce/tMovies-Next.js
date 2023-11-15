import "./CrewItem.css";
import Link from "next/link";

export default function CrewItem({ data, title }) {
  return (
    <div className='crew-item'>
      <span className='crew-item__span'>{title}</span>
      <div className='crew-item__wrapper'>
        {data.map(
          (person, i) =>
            person.name !== null && (
              <Link
                className='crew-item__link text'
                key={person.id}
                href={`/person/${person.id}`}
              >
                {i === data.length - 1 ? person.name : `${person.name},`}
              </Link>
            )
        )}
      </div>
    </div>
  );
}
