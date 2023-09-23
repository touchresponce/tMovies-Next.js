import "./InfoItem.css";

export default function InfoItem({ data, title }) {
  return (
    <div className='info-item'>
      <span className='info-item__span'>{title}</span>
      <p className='text'>{data}</p>
    </div>
  );
}
