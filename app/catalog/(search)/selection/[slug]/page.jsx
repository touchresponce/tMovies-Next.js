import Filters from "@/app/components/Filters/Filters";
import SearchList from "@/app/components/SearchList/SearchList";
import { SHORTCUTS } from "@/utils/constants";

export async function generateMetadata({ params: { slug } }) {
  return {
    title: SHORTCUTS[slug].title,
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
