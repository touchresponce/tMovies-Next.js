import "./Actors.css";
import Image from "next/image";

export default function Actors({ data }) {
  const actors = data.persons
    ?.slice(0, 11)
    .filter((x) => x.enProfession === "actor" && x.name);

  return (
    <section className='actors'>
      {actors.map((actor) => (
        <div className='actor' key={actor.id}>
          <Image
            className='actor__photo noselect'
            src={actor.photo}
            alt={actor.name}
            width={92}
            height={92}
          />
          <p className='actor__name'>{actor.name}</p>
        </div>
      ))}
    </section>
  );
}
