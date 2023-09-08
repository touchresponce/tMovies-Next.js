import "./Actors.css";
import Image from "next/image";

export default function Actors({ data }) {
  const actors = data.persons
    ?.slice(0, 13)
    .filter((x) => x.enProfession === "actor" && x.name);

  return (
    <ul className='actors__list'>
      {actors.map((actor) => (
        <li className='actor' key={actor.id}>
          <Image
            className='actor__photo noselect'
            src={actor.photo}
            alt={actor.name}
            width={100}
            height={100}
          />
          <p className='actor__name text'>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
