import Image from "next/image";
import "./Background.css";

export default function Background({ data }) {
  return (
    <div className='background'>
      <Image
        src={data.backdrop.url}
        alt=''
        fill
        priority
        sizes='(max-width: 768px) 100vw'
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
