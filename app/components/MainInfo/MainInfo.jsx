import "./MainInfo.css";
import Background from "../UI/Background/Background";
import InfoList from "../UI/InfoList/InfoList";
import MovieLogo from "../UI/MovieLogo/MovieLogo";
import ModalButton from "../UI/ModalButton/ModalButton";
import MarkButton from "../UI/MarkButton/MarkButton";

export default function MainInfo({ data }) {
  const { type, id, premiere } = data;

  const nowDate = new Date();
  const premiereDate = new Date(premiere.world || premiere.russia);

  const renderButton = () => {
    if (nowDate < premiereDate) return;

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
        <div className='major__buttons'>
          {renderButton()}
          <MarkButton id={id} />
        </div>
      </div>
    </section>
  );
}
