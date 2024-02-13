import { LINKS_MAIN, SHORTCUTS } from "@/utils/constants";
import { updateLink } from "@/utils/updateLink";
import fetchData from "@/utils/fetchData";
import Library from "../components/Library/Library";
import SliderSelection from "../components/SliderSelection/SliderSelection";

export default async function CatalogPage() {
  const fetchAndProcessData = async (key) => {
    const link = updateLink(SHORTCUTS[key].filters);
    const data = await fetchData(`${LINKS_MAIN.search}&${link}`);
    return { key, data: data.docs.slice(0, 15) };
  };

  const fetchPromises = Object.keys(SHORTCUTS).map(fetchAndProcessData);
  const results = await Promise.allSettled(fetchPromises);

  const successfulResults = results
    .filter((result) => result.status === "fulfilled")
    .map(({ value }) => (
      <SliderSelection
        key={value.key}
        data={value.data}
        title={SHORTCUTS[value.key].title}
        selection={value.key}
        progressBar
      />
    ));

  return (
    <>
      <Library />
      {successfulResults}
    </>
  );
}
