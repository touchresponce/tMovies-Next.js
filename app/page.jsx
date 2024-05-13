import "./page.css";
import fetchData from "@/utils/fetchData";
// import dynamic from "next/dynamic";
import { updateLink } from "@/utils/updateLink";
import { LINKS_MAIN, SHORTCUTS } from "@/utils/constants";
// import MainLoader from "./components/UI/MainLoader/MainLoader";
import SliderSelection from "./components/SliderSelection/SliderSelection";
import GreetingScene from "./components/GreetingScene/GreetingScene";

async function getSliderData(key) {
  const link = updateLink(SHORTCUTS[key].filters);
  const data = await fetchData(`${LINKS_MAIN.search}&${link}`);
  const slicedData = data.docs.slice(0, 15);
  return { docs: slicedData, key };
}

export default async function HomePage() {
  // const { docs: mainSlider } = await fetchData(LINKS_MAIN.mainSlider);
  const { docs: best, key: bestKey } = await getSliderData("bestOfYear");
  const { docs: mustSee, key: mustSeeKey } = await getSliderData("mustSee");
  const { docs: hbo, key: hboKey } = await getSliderData("hbo");

  // const BigSlider = dynamic(() => import("./components/BigSlider/BigSlider"), {
  //   loading: () => <MainLoader />,
  //   ssr: false,
  // });

  return (
    <>
      <GreetingScene />
      <SliderSelection
        data={best}
        title={SHORTCUTS[bestKey].title}
        selection={bestKey}
        progressBar
      />
      <SliderSelection
        data={mustSee}
        title={SHORTCUTS[mustSeeKey].title}
        selection={mustSeeKey}
        progressBar
      />
      <SliderSelection
        data={hbo}
        title={SHORTCUTS[hboKey].title}
        selection={hboKey}
        progressBar
      />
      {/* <BigSlider data={mainSlider} /> */}
    </>
  );
}
