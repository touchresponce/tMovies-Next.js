import { LINKS_MAIN, SHORTCUTS } from "@/utils/constants";
import { updateLink } from "@/utils/updateLink";
import fetchData from "@/utils/fetchData";
import Library from "../components/Library/Library";
import SliderSelection from "../components/SliderSelection/SliderSelection";

export default async function CatalogPage() {
  const fetchPromises = Object.keys(SHORTCUTS).map(async (key) => {
    const link = updateLink(SHORTCUTS[key].filters);
    const data = await fetchData(`${LINKS_MAIN.search}&${link}`);
    return { key, data: data.docs.slice(0, 15) };
  });

  const results = await Promise.all(fetchPromises);

  return (
    <>
      <Library />
      {results.map(({ key, data }) => (
        <SliderSelection
          key={key}
          data={data}
          title={SHORTCUTS[key].title}
          selection={key}
          horizontal
        />
      ))}
    </>
  );
}
