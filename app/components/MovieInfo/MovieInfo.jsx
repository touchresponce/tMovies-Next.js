import "./MovieInfo.css";
import formatNumber from "@/utils/formatNumber";
import InfoItem from "../UI/InfoItem/InfoItem";
import Fees from "../UI/Fees/Fees";

export default function MovieInfo({ data }) {
  const { fees, budget, premiere, enName, name, alternativeName } = data;

  const isEmpty = (obj) =>
    Object.values(obj).some(
      (val) => typeof val === "object" && Object.keys(val).length > 0
    );

  const formatBudget = formatNumber(budget.value);

  return (
    <div className='movie-info'>
      <h2 className='movie-info__title additional__title text'>Информация</h2>
      <InfoItem
        data={enName || alternativeName || name}
        title='Оригинальное название'
      />
      <InfoItem data={`${budget.currency} ${formatBudget}`} title='Бюджет' />
      {isEmpty(fees) && <Fees data={fees} />}
      <InfoItem data={premiere.world} title='Примьера в мире' />
      <InfoItem data={premiere.world} title='Примьера в РФ' />
    </div>
  );
}
