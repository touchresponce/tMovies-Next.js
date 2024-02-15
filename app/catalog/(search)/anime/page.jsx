import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";

export const metadata = {
  title: "Аниме",
  description:
    "Аниме в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре Tastemovies",
};

export default function MoviePage() {
  return (
    <>
      <Filters title='Аниме' />
      <SearchList />
    </>
  );
}
