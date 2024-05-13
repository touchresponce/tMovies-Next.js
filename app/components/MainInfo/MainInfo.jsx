import "./MainInfo.css";
import Background from "../UI/Background/Background";
import InfoList from "../UI/InfoList/InfoList";
import MovieLogo from "../UI/MovieLogo/MovieLogo";
import ModalButton from "../UI/ModalButton/ModalButton";

export default function MainInfo({ data }) {
  const { rating, type } = data;

  const renderButton = () => {
    const { kp, imdb } = rating;

    if (!kp && !imdb) return;

    return <ModalButton type={type} />;
  };

  return (
    <section className='major'>
      <Background data={data} />
      <div className='major__wrapper noselect'>
        <MovieLogo data={data} />
        <div className='major__text-wrapper'>
          <InfoList data={data} />
        </div>
        {renderButton()}
      </div>
    </section>
  );
}
