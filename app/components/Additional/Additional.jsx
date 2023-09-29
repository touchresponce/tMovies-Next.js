import "./Additional.css";
import Crew from "../Crew/Crew";
import MovieInfo from "../MovieInfo/MovieInfo";
import Facts from "../UI/Facts/Facts";

export default function Additional({ data }) {
  return (
    <section className='additional'>
      <MovieInfo data={data} />
      <Crew data={data} />
      {typeof data.facts === "array" && <Facts data={data} />}
    </section>
  );
}
