import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";
import { SHORTCUTS } from "@/utils/constants";

export async function generateMetadata({ params: { slug } }) {
  return {
    title: SHORTCUTS[slug].title,
    description:
      "Смотреть в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
  };
}

export default function SelectionPage({ params: { slug } }) {
  return (
    <>
      <Filters title={SHORTCUTS[slug].title} />
      <SearchList />
    </>
  );
}
