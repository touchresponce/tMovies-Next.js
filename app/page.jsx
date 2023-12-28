import "./page.css";
import fetchData from "@/utils/fetchData";
import { updateLink } from "@/utils/updateLink";
import { LINKS_MAIN, SHORTCUTS } from "@/utils/constants";
import SliderSelection from "./components/SliderSelection/SliderSelection";
import BigSlider from "./components/BigSlider/BigSlider";

async function getSliderData(key) {
  const link = updateLink(SHORTCUTS[key].filters);
  const { docs } = await fetchData(`${LINKS_MAIN.search}&${link}`);
  return { docs, key };
}

export default async function HomePage() {
  const { docs: mainSlider } = await fetchData(LINKS_MAIN.mainSlider);
  const { docs: best, key: bestKey } = await getSliderData("bestOfYear");
  const { docs: mustSee, key: mustSeeKey } = await getSliderData("mustSee");
  const { docs: hbo, key: hboKey } = await getSliderData("hbo");

  return (
    <>
      <BigSlider data={mainSlider} />
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
    </>
  );
}
