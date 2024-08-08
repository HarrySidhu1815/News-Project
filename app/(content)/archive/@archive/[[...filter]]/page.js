import NewsItems from "@/components/NewsItems";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React, { Suspense } from "react";

async function FilternedNews({year, month}){

  let news;
  let newsContent = <p>No news year or month selected</p>;

  if(year && !month){
    news = await getNewsForYear(year);
  }
  if(year && month){
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    newsContent = <NewsItems news={news} />;
  }

  return newsContent
}

async function FilteredHeader({year, month}){

  const availableYears = await getAvailableNewsYears();
  let links = availableYears

  if(year && !month){
    links = getAvailableNewsMonths(year);
  }
  if(year && month){
    links = [];
  }

  if (
    (year && !availableYears.includes(year)) ||
    (month &&
      !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filter')
  }

  return (
    <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let hreference = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={hreference}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
  )
}
export default async function NewsYearPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  

  return (
    <>
      <Suspense fallback={<p>Loading filtered news...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth}/>
        <FilternedNews year={selectedYear} month={selectedMonth}/>
      </Suspense>
    </>
  );
}
