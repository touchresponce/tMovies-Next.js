import "./Background.css";
import Image from "next/image";

export default async function Background({ data }) {
  return (
    <div className='background noselect'>
      {data.backdrop.url && (
        <Image
          src={data.backdrop.url}
          alt=''
          priority={true}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          quality={75}
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
        />
      )}
    </div>
  );
}
