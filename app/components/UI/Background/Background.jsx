import "./Background.css";

export default function Background({ data }) {
  return (
    <div
      className='background__wrapper'
      style={{
        backgroundImage: `url(${data.backdrop.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "100px 0",
      }}
    ></div>
  );
}
