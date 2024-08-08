import NewsItems from "@/components/NewsItems";
import { getAllNews } from "@/lib/news";

export default async function page() {

  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsItems news={news} />
    </>
  );
}
