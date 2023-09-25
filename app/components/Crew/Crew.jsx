import "./Crew.css";
import CrewItem from "../UI/CrewItem/CrewItem";

export default function Crew({ data }) {
  const professions = [
    { profession: "director", title: "Режиссёры" },
    { profession: "actor", title: "Актеры" },
    { profession: "editor", title: "Монтажёры" },
    // { profession: "designer", title: "Художники" },
    { profession: "producer", title: "Продюсеры" },
    { profession: "operator", title: "Операторы" },
    // { profession: "writer", title: "Редакторы" },
    { profession: "voice_actor", title: "Актёры дубляжа" },
  ];

  return (
    <div className='crew'>
      <h2 className='crew__title text'>Съёмочная группа</h2>
      {professions.map((p) =>
        data.persons.filter((x) => x.enProfession === p.profession).length ? (
          <CrewItem
            data={data.persons.filter((x) => x.enProfession === p.profession)}
            title={p.title}
            key={p.profession}
          />
        ) : null
      )}
    </div>
  );
}
