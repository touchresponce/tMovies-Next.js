import "./Additional.css";
import Crew from "../Crew/Crew";
import MovieInfo from "../MovieInfo/MovieInfo";

export default function Additional({ data }) {
  return (
    <section className='additional'>
      <MovieInfo data={data} />
      <Crew data={data} />
      <Crew data={data} />
    </section>
  );
}
