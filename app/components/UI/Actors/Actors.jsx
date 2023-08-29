import "./Actors.css";
import Image from "next/image";

export default function Actors({ data }) {
  const actors = data.persons
    ?.slice(0, 11)
    .filter((x) => x.enProfession === "actor" && x.name);

  return (
    <section className='actors'>
      <p className='actors__title text'>Актёры</p>
      <div className='actors__list'>
        {actors.map((actor) => (
          <div className='actor' key={actor.id}>
            <Image
              className='actor__photo noselect'
              src={actor.photo}
              alt={actor.name}
              width={102}
              height={102}
            />
            <p className='actor__name text'>{actor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
