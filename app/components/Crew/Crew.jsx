import "./Crew.css";
import CrewItem from "../UI/CrewItem/CrewItem";

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

export default function Crew({ data }) {
  return (
    <div className="crew">
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
