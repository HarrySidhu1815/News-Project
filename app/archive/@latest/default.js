import NewsItems from '@/components/NewsItems'
import { getLatestNews } from '@/lib/news'
import React from 'react'

export default function LatestPage() {
  const latestNews = getLatestNews()
  return (
      <NewsItems news={latestNews} />
  )
}
