import "./MovieInfo.css";
import formatNumber from "@/utils/formatNumber";
import InfoItem from "../UI/InfoItem/InfoItem";
import Fees from "../UI/Fees/Fees";
import formatDate from "@/utils/formatDate";

export default function MovieInfo({ data }) {
  const { fees, budget, premiere, enName, name, alternativeName } = data;

  const isEmptyBudget = (obj) =>
    typeof obj === "object" && Object.keys(obj).length > 0 ? true : false;

  const isEmptyFees = (obj) =>
    Object.values(obj).some(
      (val) => typeof val === "object" && Object.keys(val).length > 0
    );

  return (
    <div className='movie-info'>
      <h2 className='movie-info__title additional__title text'>Информация</h2>
      <InfoItem
        data={enName || alternativeName || name}
        title='Оригинальное название'
      />
      <InfoItem data={name} title='Название в России' />
      {isEmptyBudget(budget) && (
        <InfoItem
          data={`${budget.currency} ${formatNumber(budget.value)}`}
          title='Бюджет'
        />
      )}
      {isEmptyFees(fees) && <Fees data={fees} />}
      {premiere.world && (
        <InfoItem data={formatDate(premiere.world)} title='Примьера в мире' />
      )}
      {premiere.russia && (
        <InfoItem data={formatDate(premiere.russia)} title='Примьера в РФ' />
      )}
    </div>
  );
}
