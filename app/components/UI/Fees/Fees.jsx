import "./Fees.css";
import formatNumber from "@/utils/formatFunctions/formatNumber";
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
      {Object.keys(fees).map((key) => {
        if (fees[key])
          return (
            <InfoItem
              data={`${fees[key].currency} ${formatNumber(fees[key].value)}`}
              title={formatFees(key)}
              key={key}
            />
          );
      })}
    </div>
  );
}
