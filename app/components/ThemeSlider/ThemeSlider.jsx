import "./ThemeSlider.css";
import Image from "next/image";

export default function ThemeSlider() {
  return (
    <div className='theme'>
      <Image
        src='https://avatars.mds.yandex.net/get-ott/224348/2a0000018a99f213aa7ff90d3441f5df2dbc/orig'
        alt='test'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      {/* <p>НАЗВАНИЕ</p> */}
      {/* <div></div> */}
    </div>
  );
}
