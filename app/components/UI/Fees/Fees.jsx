import "./Fees.css";
import formatNumber from "@/utils/formatNumber";

export default function Fees({ data }) {
  const formatFees = (key) => {
    const fees = {
      world: "Сборы по миру",
      russia: "Сборы в России",
      usa: "Сборы в США",
    };
    return fees[key] || "";
  };

  return (
    <ul className='fees'>
      {Object.keys(data).map((key) => (
        <li className={`fees__item fees__item_type_${key}`} key={key}>
          <span className='fees__span info__span'>{`${formatFees(key)} `}</span>
          {`${data[key].currency} ${formatNumber(data[key].value)}`}
        </li>
      ))}
    </ul>
  );
}
