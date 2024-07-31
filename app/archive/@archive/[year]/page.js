import NewsItems from '@/components/NewsItems'
import { getNewsForYear } from '@/lib/news'
import React from 'react'

export default function NewsYearPage({params}) {
    const newsYear = params.year
    const filteredNews = getNewsForYear(newsYear)
  return (
      <NewsItems news={filteredNews}/>
  )
}
