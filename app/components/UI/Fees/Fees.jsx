import "./Fees.css";
import formatNumber from "@/utils/formatNumber";
import InfoItem from "../InfoItem/InfoItem";

export default function Fees({ data }) {
  const { fees } = data;

  const formatFees = (key) => {
    const fees = {
      world: "Сборы по миру",
      russia: "Сборы в России",
      usa: "Сборы в США",
    };
    return fees[key] || "";
  };

  return (
    <div className='fees'>
      <h2 className='fees__title text'>Сборы</h2>
      {Object.keys(fees).map((key) => (
        <InfoItem
          data={`${fees[key].currency} ${formatNumber(fees[key].value)}`}
          title={formatFees(key)}
          key={key}
        />
      ))}
    </div>
  );
}
