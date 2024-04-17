import "./Test.css";
import Image from "next/image";
import BackgroundImage from "@/public/images/bg.webp";
import LogotypeImage from "@/public/logotype.svg";
import ArrowsDownButton from "../UI/ArrowsDownButton/ArrowsDownButton";

export default function Test() {
  return (
    <section className='main-bg'>
      <Image
        className='main-bg__background'
        src={BackgroundImage}
        alt=''
        fill
        priority
        sizes='100vw'
        placeholder='blur'
        blurDataURL={BackgroundImage.src}
      />
      <div className='main-bg__wrapper'>
        <Image
          className='main-bg__logo'
          src={LogotypeImage}
          alt=''
          priority
          height={280}
          width={280}
          placeholder='blur'
          blurDataURL={LogotypeImage.src}
        />
        <div className='main-bg__text-wrapper text'>
          <h1 className='main-bg__title text'>The best streaming experience</h1>
          <h2 className='main-bg__subtitle text'>
            Погрузитесь в мир кино и развлечений с Tastemovies. У нас вы найдете
            огромную библиотеку контента различных жанров, доступную для
            просмотра абсолютно бесплатно.
          </h2>
        </div>
      </div>
      <ArrowsDownButton />
    </section>
  );
}
