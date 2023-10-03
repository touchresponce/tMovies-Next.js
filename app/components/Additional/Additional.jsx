import "./Additional.css";
import Description from "../Description/Description";
import Accordions from "../Accordions/Accordions";

export default function Additional({ data }) {
  return (
    <section className='additional'>
      {data.description && <Description data={data} />}
      <Accordions data={data} />
    </section>
  );
}
