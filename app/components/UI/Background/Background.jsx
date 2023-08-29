import "./Background.css";

export default function Background({ data }) {
  const backdrop = data.backdrop.url || null;

  const backgroundNode = backdrop !== null && (
    <div
      className='background__wrapper'
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "100px 0",
      }}
    ></div>
  );

  return backgroundNode;
}
