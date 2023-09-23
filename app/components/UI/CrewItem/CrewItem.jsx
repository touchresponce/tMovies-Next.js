import "./CrewItem.css";

export default function CrewItem({ data, title }) {
  return (
    <div className='crew-item'>
      <span className='crew-item__span'>{title}</span>
      {data.map((person) => (
        <p className='text' key={person.id}>
          {person.name}
        </p>
      ))}
    </div>
  );
}
