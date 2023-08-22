import "./Background.css";
import Image from "next/image";

export default function Background({ data }) {
  const backdrop = data.backdrop.url || null;

  const backgroundNode = backdrop !== null && (
    <div className='background noselect'>
      <div className='background__wrapper'>
        <Image
          priority
          fill
          sizes='100vw'
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          src={backdrop}
          alt='горизонтальный постер'
        />
      </div>
    </div>
  );

  return backgroundNode;
}
