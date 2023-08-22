import "./MainInfo.css";
import Background from "../UI/Background/Background";
import InfoList from "../UI/InfoList/InfoList";
import MovieLogo from "../UI/MovieLogo/MovieLogo";
import ModalButtons from "../UI/ModalButtons/ModalButtons";

export default function MainInfo({ data }) {
  return (
    <section className='major'>
      <Background data={data} />
      <div className='major__wrapper noselect'>
        <MovieLogo data={data} />
        <div className='major__text-wrapper'>
          <InfoList data={data} />
        </div>
        <ModalButtons type={data.type} />
      </div>
    </section>
  );
}
