import "./Background.css";
import Image from "next/image";
// import getImage from "@/utils/getImage";

export default async function Background({ data }) {
  // const bg = await getImage(data.backdrop.url);

  return (
    <div className='background noselect'>
      {data.backdrop.url && (
        <Image
          priority
          src={data.backdrop.url}
          alt=''
          fill
          sizes='(max-width: 768px) 100vw'
          quality={75}
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
          // placeholder='blur'
          // blurDataURL={`data:image/jpeg;base64,${bg}`}
        />
      )}
    </div>
  );
}
