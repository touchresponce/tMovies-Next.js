import { LINKS_MAIN } from "@/utils/constants";
import { SHORTCUTS } from "@/utils/constants/shortcuts";
import { updateLink } from "@/utils/updateLink";
import fetchData from "@/utils/fetchData";
import Library from "../components/Library/Library";
import SliderSelection from "../components/SliderSelection/SliderSelection";

export const metadata = {
  title: "Каталог",
  description:
    "Каталог фильмов в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

const fetchAndProcessData = async (key) => {
  const link = updateLink(SHORTCUTS[key].filters);
  const response = await fetchData(`${LINKS_MAIN.search}&${link}`);
  const docs = response.docs.slice(0, 13);
  return { key, data: docs };
};

export default async function CatalogPage() {
  const fetchPromises = Object.keys(SHORTCUTS).map((key) =>
    fetchAndProcessData(key)
  );
  const results = await Promise.allSettled(fetchPromises);

  const successfulResults = results
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => {
      const { key, data } = value;
      const { title } = SHORTCUTS[key];
      return (
        <SliderSelection key={key} data={data} title={title} selection={key} />
      );
    });

  return (
    <>
      <Library />
      {successfulResults}
    </>
  );
}
