import "./Background.css";
import Image from "next/image";

export default async function Background({ data }) {
  return (
    <div className='background noselect'>
      {data.backdrop?.url && (
        <Image
          src={data.backdrop.url}
          alt=''
          priority
          fill
          sizes='(max-width: 768px) 100vw, 70vw'
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
        />
      )}
    </div>
  );
}
