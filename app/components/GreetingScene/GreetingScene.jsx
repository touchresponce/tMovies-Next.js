import "./GreetingScene.css";
import Image from "next/image";
import BackgroundImage from "@/public/images/bg.webp";
import LogotypeImage from "@/public/logotype.svg";
import ArrowsDownButton from "../UI/ArrowsDownButton/ArrowsDownButton";

export default function GreetingScene() {
  return (
    <section className='greeting'>
      <Image
        className='greeting__background'
        src={BackgroundImage}
        alt=''
        fill
        priority
        sizes='100vw'
        placeholder='blur'
        blurDataURL={BackgroundImage.src}
      />
      <div className='greeting__wrapper'>
        <Image
          className='greeting__logo'
          src={LogotypeImage}
          alt='Логотип'
          priority
          height={280}
          width={280}
          placeholder='blur'
          blurDataURL={LogotypeImage.src}
        />
        <div className='greeting__text-wrapper text'>
          <h1 className='greeting__title text'>
            The best streaming experience
          </h1>
          <h2 className='greeting__subtitle text'>
            Погрузитесь в мир кино и развлечений с TasteMovies. У нас вы найдете
            огромную библиотеку контента различных жанров, доступную для
            просмотра абсолютно бесплатно.
          </h2>
        </div>
      </div>
      <ArrowsDownButton />
    </section>
  );
}
