import "./Background.css";
import Image from "next/image";

export default function Background({ data }) {
  return (
    <div className='background noselect'>
      {data.backdrop.url && (
        <Image
          src={data.backdrop.url}
          alt=''
          fill
          priority
          sizes='(max-width: 768px) 100vw'
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
        />
      )}
    </div>
  );
}
