import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";
import { SHORTCUTS } from "@/utils/constants";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: SHORTCUTS[slug].title,
    description:
      "Смотреть в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
  };
}

export default async function SelectionPage({ params }) {
  const { slug } = await params;

  return (
    <>
      <Filters title={SHORTCUTS[slug].title} />
      <SearchList />
    </>
  );
}
