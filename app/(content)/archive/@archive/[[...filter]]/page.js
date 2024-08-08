import NewsItems from "@/components/NewsItems";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

export default function NewsYearPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let newsContent = <p>No news year or month selected</p>;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
    news = getNewsForYear(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  if (news && news.length > 0) {
    newsContent = <NewsItems news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let hreference = selectedYear
                ? `/archive/${selectedYear}/${link}`
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
      {newsContent}
    </>
  );
}
