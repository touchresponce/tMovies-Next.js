import "./Additional.css";
import Crew from "../Crew/Crew";
import MovieInfo from "../MovieInfo/MovieInfo";
import Fees from "../UI/Fees/Fees";

export default function Additional({ data }) {
  const isEmptyFees = (obj) =>
    Object.values(obj).some(
      (val) => typeof val === "object" && Object.keys(val).length > 0
    );

  return (
    <section className='additional'>
      <MovieInfo data={data} />
      <Crew data={data} />
      {/* {isEmptyFees(data.fees) && <Fees data={data} />} */}
      <Fees data={data} />
    </section>
  );
}
