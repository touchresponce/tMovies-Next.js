import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";

export const metadata = {
  title: "Фильмы",
  description:
    "Фильмы в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

export default function MoviePage() {
  return (
    <>
      <Filters title='Фильмы' />
      <SearchList />
    </>
  );
}
