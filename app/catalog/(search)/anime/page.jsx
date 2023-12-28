import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";

export default function MoviePage() {
  return (
    <>
      <Filters title='Аниме' />
      <SearchList />
    </>
  );
}
