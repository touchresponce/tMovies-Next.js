import "./Background.css";
import Image from "next/image";

export default function Background({ data }) {
  const backdrop = data.backdrop.url || null;

  const backgroundNode = backdrop !== null && (
    // <div className='background noselect'>
    <div
      className='background__wrapper'
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "100px 0",
      }}
    >
      {/* <Image
        priority
        fill
        sizes='100vw'
        style={{
          width: "100%",
          objectFit: "cover",
          //
          // position: "absolute",
          // top: "0",
          // left: "0",
        }}
        src={backdrop}
        alt='горизонтальный постер' */}
    </div>
    // </div>
  );

  return backgroundNode;
}
